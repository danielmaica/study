package uniftec.daniel.com.ciclodevida;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.v( "MainActivity", "onCreate");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.v( "MainActivity", "onStart" );
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.v( "MainActivity", "onStart" );
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.v( "MainActivity", "onStart" );
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.v( "MainActivity", "onStart" );
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.v( "MainActivity", "onStart" );
    }
}
