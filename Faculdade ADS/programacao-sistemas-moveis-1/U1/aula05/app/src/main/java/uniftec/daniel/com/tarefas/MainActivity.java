package uniftec.daniel.com.tarefas;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    public static final String PARAMETRO_RESULTADO_TAREFA = "P_RESULT_TAREFA";

    private EditText nomeTarefaEditText;
    private CheckBox tarefaImportanteCheckBox;
    private CheckBox tarefaConcluidaCheckBox;
    private Button cancelarButton;
    private Button salvarButton;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Carrega XML Layout
        setContentView(R.layout.activity_main);

        // Busca referências dos objetos
        nomeTarefaEditText = findViewById(R.id.nome_tarefa_edit_text);
        tarefaImportanteCheckBox = findViewById(R.id.tarefa_importante_check_box);
        tarefaConcluidaCheckBox = findViewById(R.id.tarefa_concluid_check_box);
        cancelarButton = findViewById(R.id.cancelar_button);
        salvarButton = findViewById(R.id.salvar_button);

        // Adiciona o listener (this = próprio objeto) para os botões
        cancelarButton.setOnClickListener(this);
        salvarButton.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        // O objeto view do parâmetro representa qual a view que gerou o evento
        if (view == salvarButton) {
            salvarTarefa();
        } else if (view == cancelarButton) {
            cancelarTarefa();
        }
    }

    private void cancelarTarefa(){
        setResult(RESULT_CANCELED);
        finish();
    }

    private void salvarTarefa(){
        String nomeTarefa = nomeTarefaEditText.getText().toString();
        boolean tarefaImportante = tarefaImportanteCheckBox.isChecked();
        boolean tarefaConcluida = tarefaConcluidaCheckBox.isChecked();

        Tarefa tarefa = new Tarefa();
        tarefa.setNomeTarefa(nomeTarefa);
        tarefa.setImportante(tarefaImportante);
        tarefa.setConcluida(tarefaConcluida);

        Intent intent = new Intent();
        intent.putExtra(PARAMETRO_RESULTADO_TAREFA, tarefa);

        setResult(RESULT_OK, intent);
        finish();
    }

}