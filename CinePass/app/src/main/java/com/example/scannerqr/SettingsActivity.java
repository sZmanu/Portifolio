package com.example.scannerqr;

import java.util.Locale;

import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.Configuration;
import android.os.Bundle;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Switch;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatDelegate;
import androidx.appcompat.widget.SwitchCompat;

public class SettingsActivity extends AppCompatActivity {

    private SwitchCompat switchDarkMode;
    private SwitchCompat switchBeep;
    private RadioGroup radioGroupLanguage;

    private Button btnVoltar;
    private RadioButton radioEnglish, radioSpanish, radioPortuguese;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);

        switchDarkMode = findViewById(R.id.switch_dark_mode);
        btnVoltar = findViewById(R.id.btnVoltar);
        switchBeep = findViewById(R.id.switch_beep);
        radioGroupLanguage = findViewById(R.id.radio_group_language);
        radioEnglish = findViewById(R.id.radio_english);
        radioSpanish = findViewById(R.id.radio_spanish);
        radioPortuguese = findViewById(R.id.radio_portuguese);

        loadPreferences();


        btnVoltar.setOnClickListener(v -> {
            Intent intent = new Intent(SettingsActivity.this, MainActivity.class);
            startActivity(intent);
        });



        switchDarkMode.setOnCheckedChangeListener((buttonView, isChecked) -> {
            savePreference("dark_mode", isChecked);
            setDarkMode(isChecked);
        });

        switchBeep.setOnCheckedChangeListener((buttonView, isChecked) -> {
            savePreference("beep", isChecked);
        });

        radioGroupLanguage.setOnCheckedChangeListener((group, checkedId) -> {
            String language = "en"; // Default to English
            if (checkedId == R.id.radio_spanish) {
                language = "es";
            } else if (checkedId == R.id.radio_portuguese) {
                language = "pt";
            }
            savePreference("language", language);
            setLocale(language);
        });
    }

    private void loadPreferences() {
        SharedPreferences preferences = getSharedPreferences("app_settings", MODE_PRIVATE);
        boolean darkMode = preferences.getBoolean("dark_mode", false);
        boolean beep = preferences.getBoolean("beep", true);
        String language = preferences.getString("language", "en");

        switchDarkMode.setChecked(darkMode);
        switchBeep.setChecked(beep);

        if (language.equals("es")) {
            radioSpanish.setChecked(true);
        } else if (language.equals("pt")) {
            radioPortuguese.setChecked(true);
        } else {
            radioEnglish.setChecked(true);
        }

        setDarkMode(darkMode);
    }

    private void savePreference(String key, boolean value) {
        SharedPreferences preferences = getSharedPreferences("app_settings", MODE_PRIVATE);
        SharedPreferences.Editor editor = preferences.edit();
        editor.putBoolean(key, value);
        editor.apply();
    }

    private void savePreference(String key, String value) {
        SharedPreferences preferences = getSharedPreferences("app_settings", MODE_PRIVATE);
        SharedPreferences.Editor editor = preferences.edit();
        editor.putString(key, value);
        editor.apply();
    }

    private void setDarkMode(boolean isEnabled) {
        if (isEnabled) {
            AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);
        } else {
            AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
        }
    }

    private void setLocale(String language) {
        Locale locale = new Locale(language);
        Locale.setDefault(locale);
        Configuration config = new Configuration();
        config.locale = locale;
        getResources().updateConfiguration(config, getResources().getDisplayMetrics());
        recreate(); // To apply the new language
    }
}

