import { NebularControllersModule } from './nebular-controllers.module';

describe('NebularControllersModule', () => {
  let nebularControllersModule: NebularControllersModule;

  beforeEach(() => {
    nebularControllersModule = new NebularControllersModule();
  });

  it('should create an instance', () => {
    expect(nebularControllersModule).toBeTruthy();
  });
});
