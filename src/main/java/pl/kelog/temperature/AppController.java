package pl.kelog.temperature;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@RestController
@ResponseBody
@RequiredArgsConstructor
@Validated
public class AppController {
    
    private final TemperatureInfoRepository repository;
    
    @RequestMapping(value = "/api/store", method = RequestMethod.POST)
    public ResponseEntity<TemperatureInfo> store(@RequestBody @Valid ReadingDto dto) {
        TemperatureInfo info = new TemperatureInfo();
        info.setPlace(dto.getPlace());
        info.setTemperature(dto.getTemperature());
        repository.save(info);
        return new ResponseEntity<>(info, HttpStatus.CREATED);
    }
    
    @Data
    private static class ReadingDto {
        @NotNull
        private String place;
        
        @NotNull
        private Double temperature;
    }
}
