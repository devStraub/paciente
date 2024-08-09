package org.api.youx.utils;

import org.springframework.security.crypto.encrypt.Encryptors;
import org.springframework.security.crypto.encrypt.TextEncryptor;

import java.util.Objects;

public class EncryptionUtil {

    private static final String PASSWORD = "MySuperSecretKey";
    private static final String SALT = "123456";
    private static final TextEncryptor textEncryptor = Encryptors.text(PASSWORD, SALT);

    public static String encrypt(String data) {
        if (Objects.isNull(data)){
            return null;
        }

        return textEncryptor.encrypt(data);
    }

    public static String decrypt(String encryptedData) {
        if (Objects.isNull(encryptedData)){
            return null;
        }

        return textEncryptor.decrypt(encryptedData);
    }
}
