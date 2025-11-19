/**
 * Application Layer - Use Cases
 * 
 * Este archivo contiene los casos de uso de la aplicación.
 * Define las operaciones de negocio que puede realizar el Shell.
 */

export class LoadRemoteModuleUseCase {
  async execute(scope, module) {
    try {
      const container = window[scope];
      
      if (!container) {
        throw new Error(`Remote module "${scope}" is not available`);
      }

      await container.init(__webpack_share_scopes__.default);
      const factory = await container.get(module);
      const Module = factory();
      
      return Module;
    } catch (error) {
      console.error(`Error loading remote module ${scope}/${module}:`, error);
      throw error;
    }
  }
}

export class NavigationUseCase {
  constructor(navigationService) {
    this.navigationService = navigationService;
  }

  navigateTo(path) {
    this.navigationService.navigate(path);
  }

  goBack() {
    this.navigationService.goBack();
  }
}
