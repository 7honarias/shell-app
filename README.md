# Roda app

- **React 18** 
- **Module Federation** 
- **React Router v6**
- **Arquitectura Limpia**
- **Diseño responsivo**


### 1. **Domain** (Dominio)
- Contiene las entidades y reglas de negocio
- Independiente de frameworks y librerías
- Ejemplo: `RemoteModuleConfig`, `NavigationItem`

### 2. **Application** (Aplicación)
- Define los casos de uso
- Orquesta el flujo de datos
- Ejemplo: `LoadRemoteModuleUseCase`, `NavigationUseCase`

### 3. **Infrastructure** (Infraestructura)
- Implementaciones concretas de servicios
- Configuraciones externas
- Ejemplo: `RemoteModuleLoaderService`, `remoteModules.js`

### 4. **Presentation** (Presentación)
- Componentes de UI
- Páginas y rutas
- Gestión de estado de UI


```bash
# Instalar dependencias
npm install
```

```bash
# Modo desarrollo (puerto 5000)
npm run dev
```

La aplicación estará disponible en: `http://localhost:5000`

##  Microfrontends Remotos

### Auth Microfrontend

- **Puerto**: 5001
- **URL**: http://localhost:5001/assets/remoteEntry.js
- **Scope**: `auth`
- **Módulo expuesto**: `./App`



##  Estilos

- CSS modular por componente
- Soporte para modo oscuro (`prefers-color-scheme: dark`)
- Diseño responsivo con media queries
- Gradientes y animaciones modernas

##  Scripts Disponibles

```bash
npm run dev

npm run build

npm run preview

```


