package pl.kelog.tempdatabackend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TemperatureInfoRepository extends JpaRepository<TemperatureInfo, Long> {
}
