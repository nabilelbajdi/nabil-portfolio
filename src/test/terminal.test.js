import { describe, it, expect } from "vitest";
import { COMMANDS, EASTER_EGGS } from "../v2/data/terminalCommands";

describe("Terminal Commands", () => {
    describe("COMMANDS object", () => {
        it("should have help command with output", () => {
            expect(COMMANDS).toHaveProperty("help");
            expect(COMMANDS.help).toHaveProperty("output");
            expect(Array.isArray(COMMANDS.help.output)).toBe(true);
            expect(COMMANDS.help.output.length).toBeGreaterThan(0);
        });

        it("should have whoami command", () => {
            expect(COMMANDS).toHaveProperty("whoami");
            expect(COMMANDS.whoami).toHaveProperty("output");
        });

        it("should have skills command", () => {
            expect(COMMANDS).toHaveProperty("skills");
            expect(COMMANDS.skills).toHaveProperty("output");
            expect(Array.isArray(COMMANDS.skills.output)).toBe(true);
        });

        it("should have projects command", () => {
            expect(COMMANDS).toHaveProperty("projects");
            expect(COMMANDS.projects).toHaveProperty("output");
        });

        it("should have contact command", () => {
            expect(COMMANDS).toHaveProperty("contact");
            expect(COMMANDS.contact).toHaveProperty("output");
        });

        it("should have social command with links", () => {
            expect(COMMANDS).toHaveProperty("social");
            expect(COMMANDS.social).toHaveProperty("links");
            expect(Array.isArray(COMMANDS.social.links)).toBe(true);
        });

        it("should have resume command with download action", () => {
            expect(COMMANDS).toHaveProperty("resume");
            expect(COMMANDS.resume.action).toBe("download");
            expect(COMMANDS.resume.target).toBe("/resume.pdf");
        });

        it("should have theme command with theme action", () => {
            expect(COMMANDS).toHaveProperty("theme");
            expect(COMMANDS.theme.action).toBe("theme");
        });

        it("should have clear command with clear action", () => {
            expect(COMMANDS).toHaveProperty("clear");
            expect(COMMANDS.clear.action).toBe("clear");
        });
    });

    describe("EASTER_EGGS object", () => {
        it("should have sudo easter egg", () => {
            expect(EASTER_EGGS).toHaveProperty("sudo");
            expect(Array.isArray(EASTER_EGGS.sudo)).toBe(true);
        });

        it("should have vim easter egg", () => {
            expect(EASTER_EGGS).toHaveProperty("vim");
            expect(Array.isArray(EASTER_EGGS.vim)).toBe(true);
        });

        it("should have ls easter egg", () => {
            expect(EASTER_EGGS).toHaveProperty("ls");
            expect(Array.isArray(EASTER_EGGS.ls)).toBe(true);
        });

        it("should have neofetch easter egg", () => {
            expect(EASTER_EGGS).toHaveProperty("neofetch");
            expect(Array.isArray(EASTER_EGGS.neofetch)).toBe(true);
        });

        it("should have cowsay easter egg", () => {
            expect(EASTER_EGGS).toHaveProperty("cowsay");
            expect(Array.isArray(EASTER_EGGS.cowsay)).toBe(true);
        });

        it("should have many easter eggs (>20)", () => {
            const easterEggCount = Object.keys(EASTER_EGGS).length;
            expect(easterEggCount).toBeGreaterThan(20);
        });

        it("easter eggs should return string arrays", () => {
            // Check a sample of easter eggs
            const sampleEggs = ['hello', 'coffee', 'ping', 'fortune'];
            sampleEggs.forEach(egg => {
                if (EASTER_EGGS[egg]) {
                    expect(Array.isArray(EASTER_EGGS[egg])).toBe(true);
                    EASTER_EGGS[egg].forEach(line => {
                        expect(typeof line).toBe('string');
                    });
                }
            });
        });
    });

    describe("Command structure consistency", () => {
        it("all commands with output should have string array", () => {
            Object.entries(COMMANDS).forEach(([name, cmd]) => {
                if (cmd.output) {
                    expect(Array.isArray(cmd.output), `${name} output should be array`).toBe(true);
                    cmd.output.forEach((line, i) => {
                        expect(typeof line, `${name} output[${i}] should be string`).toBe('string');
                    });
                }
            });
        });

        it("commands with actions should have valid action types", () => {
            const validActions = ['download', 'theme', 'clear'];
            Object.entries(COMMANDS).forEach(([name, cmd]) => {
                if (cmd.action) {
                    expect(
                        validActions.includes(cmd.action),
                        `${name} has invalid action: ${cmd.action}`
                    ).toBe(true);
                }
            });
        });
    });
});
