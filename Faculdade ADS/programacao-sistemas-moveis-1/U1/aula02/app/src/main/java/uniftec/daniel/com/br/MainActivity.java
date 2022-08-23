package uniftec.daniel.com.br;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText caixaTextoNome;
    private Button botao;
    private TextView mensagem;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        caixaTextoNome = findViewById(R.id.caixa_texto_nome);
        botao = findViewById(R.id.botao);
        mensagem = findViewById(R.id.mensagem);

        botao.setOnClickListener(this);
    }

    @SuppressLint("SetTextI18n")
    @Override
    public void onClick(View view) {

        if(view == botao) {
            mensagem.setText("Olá " + caixaTextoNome.getText() + ". Bem vindo ao Android!");
        }

    }
}