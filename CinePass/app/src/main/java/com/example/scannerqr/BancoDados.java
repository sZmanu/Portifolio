package com.example.scannerqr;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.content.ContentValues;
import android.database.Cursor;

public class BancoDados  extends SQLiteOpenHelper  {

        private static final String DATABASE_NAME = "qrcodes.db";
        private static final int DATABASE_VERSION = 1;

        public static final String TABLE_NAME = "qrcode_results";
        public static final String COLUMN_ID = "_id";
        public static final String COLUMN_RESULT = "result";
        public static final String COLUMN_TIMESTAMP = "timestamp";

        public BancoDados(Context context) {
            super(context, DATABASE_NAME, null, DATABASE_VERSION);
        }

        @Override
        public void onCreate(SQLiteDatabase db) {
            String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " (" +
                    COLUMN_ID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                    COLUMN_RESULT + " TEXT, " +
                    COLUMN_TIMESTAMP + " TEXT" +
                    ")";
            db.execSQL(CREATE_TABLE);
        }

        @Override
        public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
            db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);
            onCreate(db);
        }

        public long addQRCodeResult(String result, String timestamp) {
            SQLiteDatabase db = this.getWritableDatabase();
            ContentValues values = new ContentValues();
            values.put(COLUMN_RESULT, result);
            values.put(COLUMN_TIMESTAMP, timestamp);
            long id = db.insert(TABLE_NAME, null, values);
            db.close();
            return id;
        }

        public Cursor getAllResults() {
            SQLiteDatabase db = this.getReadableDatabase();
            return db.query(TABLE_NAME, null, null, null, null, null, COLUMN_TIMESTAMP + " DESC");
        }

        public void clearAllResults() {
            SQLiteDatabase db = this.getWritableDatabase();
            db.delete(TABLE_NAME, null, null);
            db.close();
        }

        public void deleteResult(long id) {
            SQLiteDatabase db = this.getWritableDatabase();
            db.delete(TABLE_NAME, COLUMN_ID + "=?", new String[]{String.valueOf(id)});
            db.close();
        }
    }


