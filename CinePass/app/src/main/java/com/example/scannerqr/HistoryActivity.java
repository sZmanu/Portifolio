package com.example.scannerqr;

import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;


import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;


import java.util.ArrayList;

public class HistoryActivity extends AppCompatActivity {

    private ListView listView;

    private Button btnVoltar;
    private ArrayList<QRCodeResult> qrCodeHistory;
    private ArrayAdapter<QRCodeResult> adapter;
    private BancoDados dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_history);

        listView = findViewById(R.id.listView);
        dbHelper = new BancoDados(this);
        btnVoltar = findViewById(R.id.btnVoltar);

        btnVoltar.setOnClickListener(v -> {
            Intent intent = new Intent(HistoryActivity.this, MainActivity.class);
            startActivity(intent);
        });

        qrCodeHistory = new ArrayList<>();
        loadHistory();

        adapter = new ArrayAdapter<QRCodeResult>(this, android.R.layout.simple_list_item_1, qrCodeHistory) {
            @Override
            public View getView(int position, View convertView, ViewGroup parent) {
                View view = super.getView(position, convertView, parent);
                TextView textView = view.findViewById(android.R.id.text1);
                QRCodeResult qrCodeResult = qrCodeHistory.get(position);
                textView.setText(qrCodeResult.getResult() + " - " + qrCodeResult.getDateTime());
                return view;
            }
        };

        listView.setAdapter(adapter);
    }

    private void loadHistory() {
        Cursor cursor = dbHelper.getAllResults();
        if (cursor.moveToFirst()) {
            do {
                long id = cursor.getLong(cursor.getColumnIndexOrThrow(BancoDados.COLUMN_ID));
                String result = cursor.getString(cursor.getColumnIndexOrThrow(BancoDados.COLUMN_RESULT));
                String timestamp = cursor.getString(cursor.getColumnIndexOrThrow(BancoDados                        .COLUMN_TIMESTAMP));
                qrCodeHistory.add(new QRCodeResult(id, result, timestamp));
            } while (cursor.moveToNext());
        }
        cursor.close();
    }

    private void showDeleteDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Selecione um item para excluir");

        String[] items = new String[qrCodeHistory.size()];
        for (int i = 0; i < qrCodeHistory.size(); i++) {
            items[i] = qrCodeHistory.get(i).toString();
        }

        builder.setItems(items, (dialog, which) -> {
            QRCodeResult selectedResult = qrCodeHistory.get(which);
            showDeleteConfirmationDialog(selectedResult, which);
        });

        AlertDialog dialog = builder.create();
        dialog.show();
    }

    private void showDeleteConfirmationDialog(QRCodeResult result, int position) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Confirmar exclusão");
        builder.setMessage("Você tem certeza que deseja excluir este item?");
        builder.setPositiveButton("Sim", (dialog, which) -> {
            dbHelper.deleteResult(result.getId());
            qrCodeHistory.remove(position);
            adapter.notifyDataSetChanged();
            Toast.makeText(HistoryActivity.this, "Item excluído: " + result.toString(), Toast.LENGTH_SHORT).show();
        });
        builder.setNegativeButton("Não", null);
        AlertDialog dialog = builder.create();
        dialog.show();
    }

    private void showClearAllConfirmationDialog() {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Confirmar exclusão do histórico");
        builder.setMessage("Você tem certeza que deseja excluir todos os itens?");
        builder.setPositiveButton("Sim", (dialog, which) -> {
            dbHelper.clearAllResults();
            qrCodeHistory.clear();
            adapter.notifyDataSetChanged();
            Toast.makeText(HistoryActivity.this, "Todos os itens foram deletados", Toast.LENGTH_SHORT).show();
        });
        builder.setNegativeButton("Não", null);
        AlertDialog dialog = builder.create();
        dialog.show();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu_principal, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int itemId = item.getItemId();

        if (itemId == R.id.clear_all) {
            showClearAllConfirmationDialog();
            return true;
        } else if (itemId == R.id.clear_selected) {
            showDeleteDialog();
            return true;
        } else {
            return super.onOptionsItemSelected(item);
        }
    }
}
