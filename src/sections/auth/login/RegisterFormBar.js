import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useAuth } from '../../../Auth'
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function RegisterFormBar() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth } = useAuth();

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
    setAuth(true);
  };

  const handleClick2 = () => {
    
    setAuth(true);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const validateFields = () => {
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      username.trim() === '' 
    ) {
      return false; 
    }
    return true; 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "username") {
      setUsername(value);
    }
  };

  const handleSubmit = async () => {

    if (!validateFields()) {
      alert('Por favor, completá los campos obligatorios.');
      return;
    }

    console.log("1")

   
    try {
      const response = await axios.post(
        "https://music-lovers-production.up.railway.app/business/register/",
        {
          email,
          password,
          username,
        }
      );


      
      const token = response.data.access;

      if (token){
        document.cookie = `jwtToken=${token}; path=/; SameSite=Strict;`;
    
        console.log("Registro exitoso");

        navigate('/onboardingbar', { replace: true });

      } else {
        alert('Por favor, verifica los campos ingresados.');
      }
    
      

      
    } catch (error) {
      alert('Ocurrió un error inesperado. No se pudo completar el registro.');

    }
  };

  return (
    <>
<Stack spacing={3}>

        <TextField
          name="username"
          label="Nombre de usuario"
          value={username}
          onChange={handleChange}
        />

        <TextField
          name="email"
          label="Correo Electrónico"
          value={email}
          onChange={handleChange}
        />
        
        <TextField
          name="password"
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        sx={{ mt: 3 }}
      >
        Continuar
      </LoadingButton>
      
    </>
  );
}
