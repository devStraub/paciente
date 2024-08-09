package org.api.youx.utils;

import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.TimeZone;

@Component
public class CustomDataUtil {

    private CustomDataUtil() {
    }

    public static String calendarToString(Calendar calendar) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        sdf.setTimeZone(TimeZone.getTimeZone("UTC"));
        return sdf.format(calendar.getTime());
    }

    public static Calendar stringToCalendar(String data) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        Calendar calendar = Calendar.getInstance();
        try {
            calendar.setTime(sdf.parse(data));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return calendar;
    }

    public static void validarCpfValido(String cpf) {
        if (cpf == null || cpf.isEmpty()) {
            throw new IllegalArgumentException("CPF não pode ser nulo ou vazio");
        }
        if (cpf.length() != 11) {
            throw new IllegalArgumentException("CPF deve conter 11 dígitos");
        }
    }

}
