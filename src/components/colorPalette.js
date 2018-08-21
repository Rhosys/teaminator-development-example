export default function getColor(id) {
  let colors = [
    '#ff9343', '#4b6f80', '#dc3545', '#28a745', '#17a2b8',
    '#ffc107', '#6f42c1', '#b59fe0', '#60d9eb', '#1ab6ff',
    '#00e6ac', '#e83e8c', '#0bda0b', '#ff80df', '#9fbac6',
    '#809fff', '#222'
  ];

  return colors[id % colors.length];
}

export function getBootstrapColor(id) {
  switch (id) {
    case 'success':
      return '#28a745';
    case 'primary':
      return '#ff9343';
    case 'secondary':
      return '#4b6f80';
    case 'dark':
      return '#2d434d';
    case 'light':
      return '#f8fafa';
    case 'info':
      return '#5c889d';
    case 'warning':
      return '#ffc107';
    case 'danger':
      return '#dc3545';
    default:
      return '#000';
  }
}
