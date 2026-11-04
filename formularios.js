/*
 * Envio dos formulários do site (Contato, Contribuir com foto, Contribuir com referência)
 * para o Google Apps Script da planilha. Instalação: google-apps-script/LEIA-ME.md
 */

// Cole aqui o endereço do "App da Web" que o Google mostra ao implantar o script
// (termina em /exec).
window.FORMULARIOS_URL = 'https://script.google.com/macros/s/AKfycbxXOiM5fGa2-qjhASEI1hQn3AK-cAbXrezg-gcM0GZW3KpAGghtVDIMvB-HZSJTVSfF/exec';

(function () {
  const MAX_ARQUIVO = 10 * 1024 * 1024;   // 10 MB por arquivo
  const MAX_TOTAL = 30 * 1024 * 1024;     // limite do Google por envio

  function lerBase64(file) {
    return new Promise((ok, falha) => {
      const r = new FileReader();
      r.onload = () => ok(String(r.result).split(',')[1]);
      r.onerror = () => falha(new Error('não foi possível ler ' + file.name));
      r.readAsDataURL(file);
    });
  }

  window.enviarFormulario = async function (tipo, form) {
    if (!window.FORMULARIOS_URL) {
      throw new Error('formulário ainda não configurado (falta o endereço do Google Apps Script).');
    }
    const dados = { tipo };
    const arquivos = [];
    for (const [k, v] of new FormData(form).entries()) {
      if (v instanceof File) { if (v.size) arquivos.push(v); }
      else dados[k] = v;
    }
    let total = 0;
    for (const f of arquivos) {
      if (f.size > MAX_ARQUIVO) throw new Error(`"${f.name}" passa de 10 MB.`);
      total += f.size;
    }
    if (total > MAX_TOTAL) throw new Error('os arquivos somam mais de 30 MB. Envie menos fotos por vez.');

    dados.arquivos = await Promise.all(arquivos.map(async f => ({
      nome: f.name, tipo: f.type || 'application/octet-stream', dados: await lerBase64(f),
    })));

    // text/plain evita a checagem CORS (preflight), que o Google Apps Script não aceita.
    const res = await fetch(window.FORMULARIOS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(dados),
    });
    const resp = await res.json().catch(() => ({ ok: false, error: 'resposta inválida do servidor' }));
    if (!resp.ok) throw new Error(resp.error || 'erro ao enviar');
    return resp;
  };
})();
