package team.six.models;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by dmilnamow on 10/30/15.
 */
public interface UserDAO extends CrudRepository<User, Integer>{

    User findByEmailAndPassword(String email, String password);
}
