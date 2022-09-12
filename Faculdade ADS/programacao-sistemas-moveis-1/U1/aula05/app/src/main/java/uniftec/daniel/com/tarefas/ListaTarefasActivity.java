package uniftec.daniel.com.tarefas;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class ListaTarefasActivity extends AppCompatActivity implements View.OnClickListener {

    private Button adicionarTarefaButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lista_tarefas);

        adicionarTarefaButton = findViewById(R.id.adicionar_tarefa_button);
        adicionarTarefaButton.setOnClickListener(this);
    }


    @Override
    public void onClick(View view) {
        if (view == adicionarTarefaButton) {
            adicionarTarefa();
        }
    }

    private void adicionarTarefa() {
        Intent intent = new Intent(this, MainActivity.class);
        startActivityForResult(intent, 0);
    }

    @SuppressLint("MissingSuperCall")
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {

        if (requestCode == 0 && resultCode == RESULT_OK) {
            Tarefa tarefa = (Tarefa) data.getSerializableExtra(MainActivity.PARAMETRO_RESULTADO_TAREFA);
            Toast.makeText(this, tarefa.getNomeTarefa(), Toast.LENGTH_LONG).show();
        }
    }

}