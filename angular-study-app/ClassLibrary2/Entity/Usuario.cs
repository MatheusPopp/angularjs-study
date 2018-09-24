using System;
using System.Collections.Generic;
using System.Text;

namespace Angular.Study.Entity{
    public class Usuario
    {
    
        public int Id { get; set; }

        public String Nome { get; set; }
        public String Data_nasc { get; set; }

        public String Email { get; set; }

        public String Genero { get; set; }


        public Usuario(int id, String nome, String data_nasc, String email, String genero)
        {
            Id = id;
            Nome = nome;
            Data_nasc = data_nasc;
            Email = email;
            Genero = genero;
        }

    }
}
