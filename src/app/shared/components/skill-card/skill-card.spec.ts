import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCard } from './skill-card';

describe('SkillCard', () => {
  let component: SkillCard;
  let fixture: ComponentFixture<SkillCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render values when cardData is passed as an array', () => {
    component.cardData = [
      {
        skill: 'Frontend',
        technologies: [{ name: 'Angular', percentage: 90 }],
      },
    ];

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Frontend');
    expect(compiled.textContent).toContain('Angular');
    expect(compiled.textContent).toContain('90%');
  });
});
