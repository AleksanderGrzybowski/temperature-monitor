package pl.kelog.temperature;

import org.springframework.data.jpa.repository.JpaRepository;

interface TemperatureInfoRepository extends JpaRepository<TemperatureInfo, Long> {
}
