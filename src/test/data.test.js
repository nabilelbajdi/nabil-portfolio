import { describe, it, expect } from "vitest";
import {
  PROJECTS,
  getFeaturedProjects,
  getAllProjects,
  getProjectsTerminalOutput,
} from "../data/projects";
import {
  SKILL_CATEGORIES,
  getAllSkills,
  getCoreSkills,
} from "../data/skills";
import {
  SOCIAL_LINKS,
  PERSONAL_INFO,
} from "../data/socialLinks";
import {
  NAV_ITEMS,
  NAV_ITEMS_WITH_HOME,
} from "../data/navigation";

describe("Data: Projects", () => {
  it("should have at least one project", () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it("should have required fields for each project", () => {
    PROJECTS.forEach((project) => {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("description");
      expect(project).toHaveProperty("tags");
      expect(project).toHaveProperty("image");
    });
  });

  it("getFeaturedProjects returns only featured projects", () => {
    const featured = getFeaturedProjects();
    featured.forEach((project) => {
      expect(project.featured).toBe(true);
    });
  });

  it("getAllProjects returns all projects", () => {
    expect(getAllProjects()).toEqual(PROJECTS);
  });

  it("getProjectsTerminalOutput returns formatted array", () => {
    const output = getProjectsTerminalOutput();
    expect(Array.isArray(output)).toBe(true);
    expect(output.length).toBeGreaterThan(0);
  });
});

describe("Data: Skills", () => {
  it("should have skill categories", () => {
    expect(SKILL_CATEGORIES.length).toBeGreaterThan(0);
  });

  it("each category should have id, name and items array", () => {
    SKILL_CATEGORIES.forEach((category) => {
      expect(category).toHaveProperty("id");
      expect(category).toHaveProperty("name");
      expect(category).toHaveProperty("items");
      expect(Array.isArray(category.items)).toBe(true);
    });
  });

  it("getAllSkills includes core skills", () => {
    const all = getAllSkills();
    expect(Array.isArray(all)).toBe(true);
    expect(all.length).toBeGreaterThanOrEqual(SKILL_CATEGORIES.length);
  });

  it("getCoreSkills returns the skill categories", () => {
    const core = getCoreSkills();
    expect(core).toEqual(SKILL_CATEGORIES);
  });
});

describe("Data: Social Links", () => {
  it("should have social links with required fields", () => {
    SOCIAL_LINKS.forEach((link) => {
      expect(link).toHaveProperty("name");
      expect(link).toHaveProperty("url");
      expect(link).toHaveProperty("icon");
    });
  });

  it("PERSONAL_INFO should have name and location", () => {
    expect(PERSONAL_INFO).toHaveProperty("name");
    expect(PERSONAL_INFO).toHaveProperty("location");
  });
});

describe("Data: Navigation", () => {
  it("NAV_ITEMS should have items with id, label and href", () => {
    NAV_ITEMS.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("label");
      expect(item).toHaveProperty("href");
    });
  });

  it("NAV_ITEMS_WITH_HOME should include Home link", () => {
    const homeItem = NAV_ITEMS_WITH_HOME.find((item) => item.label === "Home");
    expect(homeItem).toBeDefined();
    expect(homeItem.href).toBe("#home");
  });
});
