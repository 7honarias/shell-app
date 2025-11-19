/**
 * Infrastructure Layer - Remote Module Loader Service
 * 
 * Servicio para cargar módulos remotos dinámicamente
 */

export class RemoteModuleLoaderService {
  static async loadRemoteModule(scope, module) {
    try {
      // Verificar si el módulo remoto está disponible
      if (!window[scope]) {
        throw new Error(`Remote module "${scope}" is not loaded`);
      }

      const container = window[scope];
      
      // Inicializar el contenedor compartido
      await container.init(__webpack_share_scopes__.default);
      
      // Obtener el módulo
      const factory = await container.get(module);
      const Module = factory();
      
      return Module;
    } catch (error) {
      console.error(`Failed to load remote module ${scope}/${module}:`, error);
      throw error;
    }
  }

  static isRemoteModuleAvailable(scope) {
    return typeof window[scope] !== 'undefined';
  }
}
