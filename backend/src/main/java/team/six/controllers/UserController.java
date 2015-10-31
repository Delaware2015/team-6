package team.six.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import team.six.models.User;
import team.six.models.UserDAO;

import java.util.ArrayList;
import java.util.Iterator;

/**
 * Created by dmilnamow on 10/30/15.
 */
@Controller
public class UserController {

    @Autowired
    UserDAO userDAO;

    @RequestMapping("/createUser")
    @ResponseBody
    public String createUser(String firstname, String lastname, String username, Integer gradelevel, String email, String password) {
        User user;


        try {
            user = new User(firstname, lastname, username, gradelevel, email, password, 0, 1);
            userDAO.save(user);
        } catch (Exception ex) {
            return "Error creating user. Try again. ============================" + ex.toString();
        }

        return "User successfully created! (id = " + user.getId() + ")";

    }


    @RequestMapping("/auth")
    @ResponseBody
    public User authUser(String username, String password) {
        User noAccess = new User();
        User user = userDAO.findOneByUsernameIgnoreCase(username);
        if (user.getPassword().equals(password)) {
            return user;
        }
        return noAccess;
    }

    @RequestMapping("/readUsers")
    @ResponseBody
    public User[] readUsers() {
        Iterator<User> read = userDAO.findAll().iterator();
        ArrayList<User> usersArrayList = new ArrayList<>();
        while (read.hasNext()) {
            usersArrayList.add(read.next());
        }
        return usersArrayList.toArray(new User[usersArrayList.size()]);
    }

    @RequestMapping("/updatePoints")
    @ResponseBody
    String updateUser(Integer id, Integer points) {
        User myUser;
        try {
            myUser = userDAO.findOne(id);
            Integer myPoints = myUser.getPoints();
            myUser.setPoints(myPoints + points);
            userDAO.save(myUser);


        } catch (Exception c) {
            return "Error when updating student account information:" + c.toString();

        }
        return ("Congratulations, " + myUser.getUsername() + "! You have earned " +
        points + "points.  Your total = " + myUser.getPoints());
    }

    @RequestMapping("/deleteUser")
    @ResponseBody
    String deleteUserById(Integer id) {
        try {

            userDAO.delete(id);

        } catch (Exception x) {
            return "Error when deleting user id: " + x.toString();
        }
        return ("User id: " + id + " deleted successfully.");
    }
    @RequestMapping("/deleteAllUsers")
    @ResponseBody
    String deleteAllUsers() {
        try {
            userDAO.deleteAll();
        } catch (Exception e) {
            return "Error when deleting all: " + e.toString();

        }
        return "All users have been removed from the database.";
    }

}
