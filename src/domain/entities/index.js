/**
 * Domain Layer - Entities
 * 
 * Este archivo contiene las entidades del dominio.
 * En una aplicación Shell, las entidades pueden representar
 * configuraciones, estados globales, o modelos compartidos.
 */

export class RemoteModuleConfig {
  constructor(name, url, scope, module) {
    this.name = name;
    this.url = url;
    this.scope = scope;
    this.module = module;
  }
}

export class NavigationItem {
  constructor(path, label, isProtected = false) {
    this.path = path;
    this.label = label;
    this.isProtected = isProtected;
  }
}
