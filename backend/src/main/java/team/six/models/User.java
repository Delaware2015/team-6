package team.six.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by dmilnamow on 10/30/15.
 */
@Entity
@Table(name = "student")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @NotNull
    String firstname;

    @NotNull
    String lastname;

    @NotNull
    String username;

    @NotNull
    String email;

    @NotNull
    String password;

    Integer gradelevel;

    Integer points;

    Integer tasklistid;


    public User(String firstname, String lastname, String username, Integer gradelevel, String email, String password, Integer points, Integer tasklistid) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gradelevel = gradelevel;
        this.email = email;
        this.username = username;
        this.password = password;
        this.points = points;
        this.tasklistid = tasklistid;
    }


    public User() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Integer getGradelevel() {
        return gradelevel;
    }

    public void setGradelevel(Integer gradelevel) {
        this.gradelevel = gradelevel;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Integer getTasklistid() {
        return tasklistid;
    }

    public void setTasklistid(Integer tasklistid) {
        this.tasklistid = tasklistid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
