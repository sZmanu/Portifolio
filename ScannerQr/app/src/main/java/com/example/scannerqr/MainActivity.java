package com.example.scannerqr;

import android.Manifest;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatDelegate;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.bumptech.glide.Glide;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.android.material.snackbar.Snackbar;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.journeyapps.barcodescanner.ScanContract;
import com.journeyapps.barcodescanner.ScanOptions;

import org.json.JSONException;
import org.json.JSONObject;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    private ImageView btnSettings, btnHistory;
    private Button btnScan;
    private TextView txtResult;
    private BancoDados dbHelper;
    private ActivityResultLauncher<ScanOptions> barLauncher;

    private static final int CAMERA_PERMISSION_CODE = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnScan = findViewById(R.id.btnScan);
        btnSettings = findViewById(R.id.btnSettings);
        btnHistory = findViewById(R.id.btnHistory);
        txtResult = findViewById(R.id.txtResult);

        // Autenticar usuário
        AuthUser();

        ImageView imageView = findViewById(R.id.imageViewGif);
        Glide.with(this)
                .asGif()
                .load(R.drawable.gif) // Substitua 'your_gif_file' pelo nome do seu arquivo GIF
                .into(imageView);

        dbHelper = new BancoDados(this);

        btnScan.setOnClickListener(v -> checkCameraPermissionAndScan());

        btnSettings.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, SettingsActivity.class);
            startActivity(intent);
        });

        btnHistory.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, HistoryActivity.class);
            startActivity(intent);
        });

        barLauncher = registerForActivityResult(new ScanContract(), result -> {
            if (result.getContents() != null) {
                String contents = result.getContents();
                Log.d("QRCode", "Scanned Contents: " + contents); // Log do conteúdo escaneado
                verifyTicketId(contents); // Verifica o ID do Ticket no Firebase
            }
        });

        applySettings();
    }

    private void checkCameraPermissionAndScan() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, CAMERA_PERMISSION_CODE);
        } else {
            scanCode();
        }
    }

    private void scanCode() {
        ScanOptions options = new ScanOptions();
        options.setPrompt("Aumentar o volume para ligar o flash");

        SharedPreferences preferences = getSharedPreferences("app_settings", MODE_PRIVATE);
        boolean beepEnabled = preferences.getBoolean("beep", true);
        options.setBeepEnabled(beepEnabled);

        options.setOrientationLocked(true);
        options.setCaptureActivity(CaptureAct.class);
        barLauncher.launch(options);
    }

    private void applySettings() {
        SharedPreferences preferences = getSharedPreferences("app_settings", MODE_PRIVATE);
        boolean darkMode = preferences.getBoolean("dark_mode", false);
        setDarkMode(darkMode);

        String language = preferences.getString("language", "en");
        setLocale(language);
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
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == CAMERA_PERMISSION_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                scanCode();
            } else {
                txtResult.setText("Permissão de câmera negada");
            }
        }
    }

    private void verifyTicketId(String content) {
        try {
            // Analisar a string JSON
            JSONObject jsonObject = new JSONObject(content);

            // Obter o ID do ticket a partir do JSON
            String ticketId = jsonObject.getString("id");

            FirebaseFirestore db = FirebaseFirestore.getInstance();
            db.collection("Tickets").document(ticketId).get().addOnCompleteListener(task -> {
                if (task.isSuccessful()) {
                    DocumentSnapshot document = task.getResult();
                    if (document.exists()) {
                        String dateTime = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss", Locale.getDefault()).format(new Date());
                        dbHelper.addQRCodeResult(ticketId, dateTime);
                        txtResult.setText("Ticket válido! - Sessão: >a ser implementado<" +ticketId);
                    } else {
                        txtResult.setText("Ticket inválido!");
                    }
                } else {
                    Log.d("Firestore", "Erro ao verificar ticket: ", task.getException());
                    txtResult.setText("Erro ao verificar ticket");
                }
            });
        } catch (JSONException e) {
            Log.e("QRCode", "Erro ao analisar o JSON do QR code", e);
            txtResult.setText("Erro ao analisar o QR code");
        }
    }
    private void AuthUser(){

        String email ="teste@teste.com";
        String pass = "1234567";

        FirebaseAuth.getInstance().signInWithEmailAndPassword(email,pass).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {

                if (task.isSuccessful()) {
                    return;
                } else {
                    String error;

                    try {
                        throw task.getException();

                    } catch (Exception e) {
                        error = "Erro ao realizar login";
                        Log.d("Erro de autenticação",error);
                    }
                }

            }
        });

    }

}
