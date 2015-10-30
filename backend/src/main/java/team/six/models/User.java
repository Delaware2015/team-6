package team.six.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by abrown on 10/30/15.
 */
@Entity
@Table(name="student")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @NotNull
    String firstname;
   
}
