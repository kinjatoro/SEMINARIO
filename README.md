# PARA CORRER EL PROGRAMA

1. Instalar NodeJS (https://nodejs.org/en) y VS Code (https://code.visualstudio.com/download)
2. Abir VS Code
3. Darle a "clone github repository" y pegar `https://github.com/kinjatoro/SEMINARIO`
4. Seleccionar la carpeta donde querés que se instale (no es necesario crear una nueva, al clonar el proyecto se crea una carpeta contenedora automáticamente).
5. Abrir la terminal (CTRL ñ)
6. Ejecutar en la terminal `npm i`
7. Ejecutar `npm start`

https://mui.com/material-ui/getting-started/

Probar estilos -> https://bareynol.github.io/mui-theme-creator/

---
### **TEMPLATES** 
* DEVIAS -> https://mui.com/store/previews/devias-kit/
* BERRY -> https://mui.com/store/previews/berry-react-material-admin-free/
* MANTIS -> https://mui.com/store/previews/mantis-free-react-admin-dashboard-template/
* MINIMAL -> https://mui.com/store/previews/minimal-dashboard-free/ [Elegimos esta]
* PAPERBASE -> https://mui.com/store/previews/paperbase/
* ONE PIRATE -> https://mui.com/store/previews/onepirate/
---

### **IMPORTACIONES** 

* TIPOGRAFÍA -> `import {Typography} from '@mui/material';`
* BOTÓN -> `import {Button} from '@mui/material';`
* ÍCONOS -> `import {NombreIcono} from '@mui/icons-material';`
* ICON-BUTTON -> `import {IconButton} from '@mui/material';`
* TEMA -> `import {createTheme, ThemeProvider} from "@mui/material/styles";`
* APPBAR -> `import { AppBar } from '@mui/material';`
* TOOLBAR -> `import { Toolbar } from '@mui/material';`
* CARD -> `import {Card, CardContent, CardActions} from '@mui/material';`
* NAVBAR -> `import NavBar from './components/NavBar';`
* LISTA -> `import {List,ListItem,ListItemIcon,ListItemText,Divider} from '@mui/material';`

----

### **COMPONENTES PUROS DE MATERIAL UI**

#### [BOTÓN](https://mui.com/material-ui/api/button/) `<Button/>`
* color = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | string
* href = "google.com"
* size = 'small' | 'medium' | 'large' | string
* variant = 'contained' | 'outlined' | 'text' | string
* startIcon = {</>}
* endIcon = {</>}

<br>

#### [ÍCONOS](https://mui.com/material-ui/api/icon/)
* color = 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string
* fontSize = 'inherit' | 'large' | 'medium' | 'small' | string

NOTA: cada ícono se maneja como componente único, es decir, si para botón tenemos `<Button/>`, para icono tenemos
`<CreditCardt/>`, `<DoNotDisturb/>`, y así con cada uno.

<br>

#### [ICON-BUTTON](https://mui.com/material-ui/api/icon-button/)
Siguen la estructura:
```javascript 
<IconButton>
    <CreditCardt/>
</IconButton>
```      

No tiene props útiles.
  
<br>

#### [TIPOGRAFÍA](https://mui.com/material-ui/api/typography/) `<Typography/>`
* align = 'center' | 'justify' | 'left' | 'right'
* variant = 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2' | string
* color = 'primary' | 'secondary' | 'success'

<br>

#### [TEMA](https://mui.com/material-ui/customization/theming/#theme-provider) `<ThemeProvider/>`
Sirve para agregar estilos CSS a cualquier componente React. Consta de dos partes:
* CreateTheme (va entre los imports y App()):
```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: "#000e35",
    },
    secondary: {
      main: "#97b59d",
    },
  },
});
```
* ThemeProvider:
```javascript
    <ThemeProvider theme={theme}>
     <Button color = "secondary">
        BOTÓN DE PRUEBA
     </Button>
    </ThemeProvider>
```
<br>

#### [APPBAR (atómico)](https://mui.com/material-ui/api/app-bar/) `<AppBar/>`
* position = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky'
* color = 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent' | string
<br>

#### [TOOLBAR](https://mui.com/material-ui/api/toolbar/) `<ToolBar/>`
* variant = 'dense' | 'regular' | string
---

### **COMPONENTES COMPUESTOS**

Los componentes compuestos van en una carpeta aparte dentro del src llamada `components`.

La estructura básica es:
```javascript
import React from 'react';
const Componente = () => {
    return (
        <div>
        </div>
    )
}
export default Componente;
```

<br>

#### [NAVBAR - AppBar Compuesto](https://mui.com/material-ui/react-app-bar/)

Estructura básica del NavBar:
```javascript
    <AppBar position="static">
        <Toolbar>

        </Toolbar>
      </AppBar>
```
<br>

#### [CARD (compuesto)](https://mui.com/material-ui/react-card/) `<Card/>` `<CardContent/>` `<CardActions/>`
Estructura básica de la carta:
```javascript
<Card>
  <CardActionArea> 
        <CardMedia/>

        <CardContent>

        </CardContent>
  </CardActionArea>

  <CardActions>
      
  </CardActions>
</Card>
```
<br>

