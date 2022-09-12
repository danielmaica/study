
package uniftec.daniel.com.atividadeavaliativa2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView txtBase, txtAltura, txtTituloResultado, txtResultado;
    private EditText edtBase, edtAltura;
    private Button btnCalcular, btnLimpar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtBase = findViewById(R.id.txtBase);
        txtAltura = findViewById(R.id.txtAltura);
        txtTituloResultado = findViewById(R.id.txtTituloResultado);
        txtResultado = findViewById(R.id.txtResultado);
        edtBase = findViewById(R.id.edtBase);
        edtAltura = findViewById(R.id.edtAltura);
        btnCalcular = (Button) findViewById(R.id.btnCalcular);
        btnLimpar = (Button) findViewById(R.id.btnLimpar);
        btnCalcular.setOnClickListener(this);
        btnLimpar.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        if (view == btnCalcular) {
            calcular();
        } else {
            limpar();
        }
    }

    private void limpar() {
        edtBase.setText("");
        edtAltura.setText("");
        txtResultado.setText("");
    }

    private void calcular() {
        float base = Float.parseFloat(edtBase.getText().toString());
        float altura = Float.parseFloat(edtAltura.getText().toString());
        float resultado = base * altura;
        txtResultado.setText(resultado + "");
    }
}