package com.example.scannerqr;


import android.os.Parcel;
import android.os.Parcelable;

public class QRCodeResult {
    private long id;
    private String result;
    private String dateTime;

    public QRCodeResult(long id, String result, String dateTime) {
        this.id = id;
        this.result = result;
        this.dateTime = dateTime;
    }

    public QRCodeResult(String result, String dateTime) {
        this.result = result;
        this.dateTime = dateTime;
    }

    public long getId() {
        return id;
    }

    public String getResult() {
        return result;
    }

    public String getDateTime() {
        return dateTime;
    }

    @Override
    public String toString() {
        return result + " - " + dateTime;
    }
}

