package org.api.youx.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;

@Converter(autoApply = true)
public class CryptoConverter implements AttributeConverter<String, String> {

    private final String password = "MySuperSecretKey";
    private final String salt = "123456";
    private final TextEncryptor textEncryptor;

    public CryptoConverter() {
        this.textEncryptor = Encryptors.text(password, salt);
    }

    @Override
    public String convertToDatabaseColumn(String attribute) {
        if (attribute == null) {
            return null;
        }
        return textEncryptor.encrypt(attribute);
    }

    @Override
    public String convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }
        return textEncryptor.decrypt(dbData);
    }
}
