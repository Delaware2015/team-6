package team.six.models;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by dmilnamow on 10/30/15.
 */
public interface TaskDAO extends CrudRepository<Task, Integer> {
}
