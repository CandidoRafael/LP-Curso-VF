const originalTitle = document.title;

// Escuta o evento de mudança de visibilidade
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Se a guia não estiver visível, altera o título
    document.title = 'Ei, volte aqui! ';
  } else {
    // Quando o usuário retorna, restaura o título original
    document.title = originalTitle;
  }
});