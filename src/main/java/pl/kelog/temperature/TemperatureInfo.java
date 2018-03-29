package pl.kelog.temperature;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Data
class TemperatureInfo {
    
    @Id
    @GeneratedValue
    private Long id;
    
    @NotNull
    private LocalDateTime dateTime = LocalDateTime.now();
    
    @NotNull
    private String place;
    
    @NotNull
    private double temperature;
}
