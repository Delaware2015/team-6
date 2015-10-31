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


}
