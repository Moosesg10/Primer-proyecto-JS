export function getColor(voto) {
    if (voto >= 7.5) {
      return "bg-success";
    } else if (voto >= 5) {
      return "bg-warning text-dark";
    } else {
      return "bg-danger";
    }
  }