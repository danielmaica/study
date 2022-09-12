package uniftec.daniel.com.atividadeavaliativa3;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView txtGrauA, txtGrauB, txtGrauC, txtTituloResultado, txtNotaFinal, txtAprovado;
    private EditText edtGrauA, edtGrauB, edtGrauC;
    private Button btnCalcular, btnLimpar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtGrauA = findViewById(R.id.txtGrauA);
        txtGrauB = findViewById(R.id.txtGrauB);
        txtGrauC = findViewById(R.id.txtGrauC);
        txtTituloResultado = findViewById(R.id.txtTituloResultado);
        txtNotaFinal = findViewById(R.id.txtNotaFinal);
        txtAprovado = findViewById(R.id.txtAprovado);
        edtGrauA = findViewById(R.id.edtGrauA);
        edtGrauB = findViewById(R.id.edtGrauB);
        edtGrauC = findViewById(R.id.edtGrauC);
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

    private void calcular() {
        float grauA = Float.parseFloat(edtGrauA.getText().toString());
        float grauB = Float.parseFloat(edtGrauB.getText().toString());
        float grauC = Float.parseFloat(edtGrauC.getText().toString());
        float media1 = (grauA + grauB) / 2;
        float media2 = (grauA + grauB + grauC) / 3;
        if (media1 >= 7) {
            txtNotaFinal.setText(media1 + "");
            txtAprovado.setText("Aprovado");
        } else if (media2 >= 5) {
            txtNotaFinal.setText(media2 + "");
            txtAprovado.setText("Aprovado");
        } else {
            txtNotaFinal.setText(media2 + "");
            txtAprovado.setText("Reprovado");
        }

    }

    private void limpar() {
        edtGrauA.setText("");
        edtGrauB.setText("");
        edtGrauC.setText("");
        txtNotaFinal.setText("");
        txtAprovado.setText("");
    }
}