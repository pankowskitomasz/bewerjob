CREATE TABLE BEWERBUNGEN(
    ID INT NOT NULL AUTO_INCREMENT,
    UNTERNEHMEN INT NOT NULL,
    BENUTZER INT NOT NULL,
    ZEIT DATETIME DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY(ID)
);
