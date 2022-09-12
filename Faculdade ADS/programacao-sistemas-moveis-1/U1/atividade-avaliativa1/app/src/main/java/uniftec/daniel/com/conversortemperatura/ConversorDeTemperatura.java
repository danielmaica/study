package uniftec.daniel.com.conversortemperatura;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class ConversorDeTemperatura extends AppCompatActivity implements View.OnClickListener {

    private TextView txtTemperatura, txtTituloResposta, txtResposta;
    private EditText edtTemperatura;
    private Button btnCelcius, btnFahrenheit, btnLimpar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtTemperatura = findViewById(R.id.txtTemperatura);
        txtTituloResposta = findViewById(R.id.txtTituloResposta);
        txtResposta = findViewById(R.id.txtResposta);
        edtTemperatura = findViewById(R.id.edtTemperatura);
        btnCelcius = (Button)findViewById(R.id.btnCelcius);
        btnFahrenheit = (Button)findViewById(R.id.btnFahrenheit);
        btnLimpar = (Button)findViewById(R.id.btnLimpar);

        btnCelcius.setOnClickListener(this);
        btnFahrenheit.setOnClickListener(this);


    }

    @Override
    public void onClick(View view) {
        if (view == btnCelcius){
            converterCelcius();
        } else if (view == btnFahrenheit) {
            converterFahrenheit();
        } else if (view == btnLimpar) {
            limpar();
        }
    }

    private void converterCelcius(){
        float valor = Float.parseFloat(edtTemperatura.getText().toString());
        float resultado = (valor * 9 / 5) + 32;
        txtResposta.setText(resultado + "ºF");
    }

    private void converterFahrenheit(){
        float valor = Float.parseFloat(edtTemperatura.getText().toString());
        float resultado = (valor - 32) * 5 / 9;
        txtResposta.setText(resultado + "ºC");
    }

    private void limpar(){
        edtTemperatura.setText("");
        txtResposta.setText("");
    }

}