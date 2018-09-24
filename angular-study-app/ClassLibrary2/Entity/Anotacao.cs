using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Angular.Study.Entity { 
    public class Anotacao{

        public int Id { get; set; }

        [Required]
        public Usuario Usuario { get; set; }


        public String Titulo { get; set; }

        public String Conteudo { get; set; }

        public Anotacao(Usuario usuario, String titulo, String conteudo)
        {
            Usuario = usuario;
            Titulo = titulo;
            Conteudo = conteudo;
        }
    }
}
