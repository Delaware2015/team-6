package team.six.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import team.six.models.Task;
import team.six.models.TaskDAO;

import java.util.ArrayList;
import java.util.Iterator;

/**
 * Created by dmilnamow on 10/30/15.
 */
@Controller
public class TaskController {

    @Autowired
    TaskDAO taskDAO;

    @RequestMapping("/createTask")
    @ResponseBody
    public String createTask(String title, String description, Integer points, Integer listid){
        Task task;
        try{
            task = new Task(title, description, points, 1);
            taskDAO.save(task);
        }catch(Exception ex){
            return "Error creating task. Try again. ============================" + ex.toString();
        }
        return "Task successfully created! (id = " + task.getId() + ")";

    }
    @RequestMapping("/readTasks")
    @ResponseBody
    public Task[] readTasks() {
        Iterator<Task> read = taskDAO.findAll().iterator();
        ArrayList<Task> tasksArrayList = new ArrayList<>();
        while (read.hasNext()) {
            tasksArrayList.add(read.next());
        }
        return tasksArrayList.toArray(new Task[tasksArrayList.size()]);
    }

    @RequestMapping("/deleteTask")
    @ResponseBody
    String deleteTaskById(Integer id) {
        try {

            taskDAO.delete(id);

        } catch (Exception x) {
            return "Error when deleting task id: " + x.toString();
        }
        return ("Task id: " + id + " deleted successfully.");
    }

    @RequestMapping("/deleteAllTasks")
    @ResponseBody
    String deleteAllTasks() {
        try {
            taskDAO.deleteAll();
        } catch (Exception e) {
            return "Error when deleting all: " + e.toString();

        }
        return "All tasks have been removed from the database.";
    }


}
