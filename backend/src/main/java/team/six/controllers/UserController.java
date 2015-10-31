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
 * Created by abrown on 10/30/15.
 */
@Controller
public class UserController {

    @Autowired
    UserDAO userDAO;

    @RequestMapping("/createUser")
    @ResponseBody
    public String createUser(String firstname, String lastname, Integer gradelevel, String email, String password){
        User user;
try{
    user = new User(firstname, lastname, gradelevel, email, password, 0, 1);
    userDAO.save(user);
}catch(Exception ex){
    return "Error creating user. Try again. ============================" + ex.toString();
}
        return "User successfully created! (id = " + user.getId() + ")";

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




}
