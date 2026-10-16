$(document).ready(function () {

    // ==========================================
    // 1. Hero Typewriter Effect (AI Lead Developer Focus)
    // ==========================================
    const keywords = [
        "AI Lead Developer & Senior Backend Engineer",
        "Primary Stack: Core Java & Python",
        "Architecting Coding Agents & Autonomous Workflows",
        "Accredited Enterprise Engineer (HSBC) — Leadership",
        "Google Cloud Certified Professional Cloud Architect",
        "Active AI-Driven Software Engineering (Not Just Prompts!)",
        "7+ Years Enterprise Backend Experience @ HSBC",
        "I build things, break things, fix things, and lead with AI"
    ];
    const holder = document.getElementById("holder");

    let wordIndex = 0;
    let charIndex = 0;
    let erasing = false;

    function typeAndErase() {
        if (!holder) return;

        if (!erasing) {
            holder.textContent = keywords[wordIndex].slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === keywords[wordIndex].length) {
                setTimeout(() => {
                    erasing = true;
                }, 1600); // Pause before erasing
            }
        } else {
            holder.textContent = keywords[wordIndex].slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                erasing = false;
                wordIndex = (wordIndex + 1) % keywords.length;
            }
        }

        const speed = erasing ? 35 : 65;
        setTimeout(typeAndErase, speed);
    }

    typeAndErase();

    // ==========================================
    // 2. WOW.js Animations
    // ==========================================
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // ==========================================
    // 3. Mobile Navigation Drawer
    // ==========================================
    $(".fa-bars").click(function () {
        $(".nav-screen").css("right", "0px");
    });

    $(".fa-times, .nav-links a").click(function () {
        $(".nav-screen").css("right", "-300px");
    });

    // ==========================================
    // 4. FullPage.js Initialization
    // ==========================================
    const anchorsList = [
        "home",
        "terminal",
        "about",
        "achievements",
        "workExperience",
        "technologies",
        "recognition",
        "contact"
    ];

    if ($("#fullpage").length > 0 && typeof $.fn.fullpage !== 'undefined') {
        $("#fullpage").fullpage({
            scrollBar: true,
            responsiveWidth: 768,
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: anchorsList,
            anchors: anchorsList,
            menu: "#myMenu",
            fitToSection: false,
            autoScrolling: false, // Smooth native scrolling with anchor awareness

            afterLoad: function (anchorLink, index) {
                if (index === 1) {
                    $(".fa-chevron-down").css("opacity", "0.8");
                    $(".nav-header").css("background", "rgba(10, 13, 20, 0.85)");
                } else {
                    $(".fa-chevron-down").css("opacity", "0");
                    $(".nav-header").css("background", "rgba(10, 13, 20, 0.95)");
                }
            }
        });
    }

    // Move section down on arrow click
    $(document).on("click", "#moveDown", function () {
        if (typeof $.fn.fullpage !== 'undefined' && $.fn.fullpage.moveSectionDown) {
            $.fn.fullpage.moveSectionDown();
        } else {
            $('html, body').animate({
                scrollTop: $("#terminal-section").offset().top - 64
            }, 600);
        }
    });

    // ==========================================
    // 5. Interactive Tech Terminal Emulator
    // ==========================================
    const terminalOutput = $("#terminal-output");
    const terminalInput = $("#terminal-cmd-input");
    const commandHistory = [];
    let historyIndex = -1;

    const resumeData = {
        name: "Abhishek Raha",
        title: "AI Lead Developer | Senior Backend Engineer (Java / Python)",
        accreditation: "Accredited Enterprise Engineer (HSBC)",
        certification: "Google Cloud Certified - Professional Cloud Architect",
        experience: "7+ years in enterprise software and financial technology (HSBC)",
        focus: ["Active AI-Native Development", "Coding Agents & Workflows", "Java & Python", "GCP Cloud Architecture", "Technical Leadership"],
        location: "India",
        contacts: {
            email: "abhishekraha0001@gmail.com",
            phone: "+91 9078802424",
            linkedin: "https://www.linkedin.com/in/abhishek-raha/",
            github: "https://github.com/abhishekraha",
            website: "https://abhishekraha.github.io/AbhishekRaha/"
        },
        skills: {
            ai_engineering: ["Coding-Agent Workflows", "Subagents & Skills", "Feature Engineering", "Automated Testing", "Codebase Refactoring", "Output Validation"],
            languages: ["Java", "Python", "Scala", "SQL", "Shell Scripting", "Groovy"],
            cloud_devops: ["Google Cloud Platform (GCP)", "Infrastructure as Code (Ansible)", "Docker", "Podman", "Jenkins CI/CD", "UNIX/Linux", "Git"],
            enterprise_systems: ["Distributed Architecture", "Event-Driven Messaging (Kafka, Aeron)", "APIs & Gateways", "OMS (Historical)", "IT Service Ownership"]
        },
        certifications: [
            "Accredited Enterprise Engineer - HSBC (2023)",
            "Google Cloud Certified - Professional Cloud Architect (2023)",
            "Certified Ethical Hacker (2017)"
        ],
        awards: [
            "Pat on the Back (2025, 2019)",
            "Circle of Excellence (2022)",
            "Star Performer (2021)"
        ]
    };

    function appendTerminalOutput(text, isCommand = false) {
        if (!terminalOutput.length) return;
        const line = document.createElement("div");
        line.className = "terminal-line";
        if (isCommand) {
            line.innerHTML = `<span class="term-cyan">abhishek@ai-lead:~$</span> <span class="term-bold">${escapeHtml(text)}</span>`;
        } else {
            line.innerHTML = text;
        }
        terminalOutput.append(line);
        const termBody = document.querySelector(".terminal-body");
        if (termBody) {
            termBody.scrollTop = termBody.scrollHeight;
        }
    }

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function (s) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#x2F;',
                '`': '&#x60;',
                '=': '&#x3D;'
            }[s];
        });
    }

    function handleTerminalCommand(rawCmd) {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        commandHistory.push(rawCmd);
        historyIndex = commandHistory.length;
        appendTerminalOutput(rawCmd, true);

        switch (cmd) {
            case "help":
                appendTerminalOutput(`
<span class="term-yellow">Available Commands:</span>
  <span class="term-cyan">summary</span>      - Display AI Lead Developer profile & engineering background
  <span class="term-cyan">ai</span>           - Learn about active software development using AI coding agents
  <span class="term-cyan">stack</span>        - List primary languages (Java, Python) and cloud stack
  <span class="term-cyan">metrics</span>      - Show achievements and team force-multiplier impact
  <span class="term-cyan">experience</span>   - View leadership & HSBC career progression
  <span class="term-cyan">certs</span>        - Show HSBC Enterprise Engineer accreditation & GCP Architect cert
  <span class="term-cyan">awards</span>       - View HSBC recognition & awards
  <span class="term-cyan">cat resume.json</span> - Dump full profile as formatted JSON
  <span class="term-cyan">contact</span>      - Get email, LinkedIn, and GitHub links
  <span class="term-cyan">whoami</span>       - Display visitor session telemetry
  <span class="term-cyan">clear</span>        - Clear the terminal console
`);
                break;

            case "summary":
                appendTerminalOutput(`
<span class="term-bold">ABHISHEK RAHA</span> | <span class="term-green">AI Lead Developer & HSBC Accredited Enterprise Engineer</span>
• 7+ years of experience leading teams and building enterprise software at HSBC.
• Primary development stacks: <span class="term-yellow">Core Java & Python</span>.
• Deep expertise in <span class="term-green">active AI-native software development</span>: building coding-agent workflows, subagents, and reusable skills that accelerate feature delivery and testing.
• <span class="term-cyan">HSBC Accredited Enterprise Engineer (2023)</span> recognized for strategic technical leadership, enterprise architecture standards, and code governance.
• Certified <span class="term-cyan">Google Cloud Professional Cloud Architect (2023)</span> with hands-on IaC provisioning.
• Foundational background in enterprise distributed systems, Kafka event streaming, and financial technology.
`);
                break;

            case "ai":
            case "ai-leadership":
                appendTerminalOutput(`
<span class="term-green">🤖 ACTIVE AI-DRIVEN SOFTWARE ENGINEERING & LEADERSHIP:</span>
  • <span class="term-bold">Beyond Prompting:</span> Hands-on software development using autonomous coding agents across the entire lifecycle.
  • <span class="term-cyan">Feature Implementation:</span> Driving multi-file feature delivery and complex codebase refactoring with agentic pairs.
  • <span class="term-yellow">Automated Verification:</span> Synthesizing automated test suites, regression checks, and rigorous verification of AI-generated code.
  • <span class="term-coral">Reusable Skills & Workflows:</span> Authoring domain-specific skills, subagents, and deterministic pipelines that eliminate engineering toil across teams.
`);
                break;

            case "stack":
            case "skills":
                appendTerminalOutput(`
<span class="term-yellow">PRIMARY TECH STACK:</span>
  <span class="term-green">[Primary Languages]</span>  : Core Java, Python, Scala, SQL, Shell Scripting, Groovy
  <span class="term-coral">[AI-Led Engineering]</span> : Coding Agents, Agentic Workflows, Reusable Skills, Automated Test Synthesis
  <span class="term-cyan">[Cloud & DevOps]</span>     : Google Cloud Platform (GCP), Infrastructure as Code (Ansible), Docker, Podman, Jenkins, Git
  <span class="term-yellow">[Enterprise Systems]</span> : Distributed Architecture, Apache Kafka, APIs, IT Service Ownership
  <span class="term-dim">[Historical Focus]</span>   : Order Management Systems (OMS), Market Connectivity, FIX Gateways
`);
                break;

            case "metrics":
            case "achievements":
                appendTerminalOutput(`
<span class="term-green">⚡ SELECTED ACHIEVEMENTS & IMPACT:</span>
  1. <span class="term-cyan">AI Team Force Multiplier:</span> Created reusable AI skills, agents, and developer workflows that eliminated repetitive engineering effort and accelerated team delivery.
  2. <span class="term-cyan">5-6 min</span> processing speedup via targeted application refactoring in enterprise Cash Equities trading systems.
  3. <span class="term-cyan">90%</span> reduction in privileged production access by automating release processes and governance.
  4. <span class="term-cyan">95%</span> IT compliance adherence achieved via custom release-metrics and policy-breach monitoring.
  5. <span class="term-cyan">Zero Downtime</span> achieved across critical component upgrades and routing migrations.
`);
                break;

            case "experience":
            case "work":
                appendTerminalOutput(`
<span class="term-yellow">PROFESSIONAL CAREER (HSBC Technology):</span>
  • <span class="term-green">Consultant Specialist – Cash Equities Technology</span> [Nov 2023 - Present]
    - Lead a team of 3 engineers through strategic migration to modern bank infrastructure.
    - Provisioned Google Cloud environments using Infrastructure as Code (IaC).
    - Championed active AI-native software development across feature delivery, refactoring, and agent skills.
    - Act as IT Service Owner for mission-critical trading application (DR, audit, governance).

  • <span class="term-green">Senior Software Developer – Cash Equities Technology</span> [Feb 2022 - Nov 2023]
    - Decoupled legacy OMS components, accelerating delivery and modernizing architecture.
    - Implemented direct broker routing bypassing intermediate hops.
    - Provided frontline Production Support for OMS and market connectivity during active trading hours.
    - Upgraded key components with zero unplanned downtime.

  • <span class="term-green">Software Developer – Cash Equities Technology</span> [Jul 2019 - Jan 2022]
    - Led FIX Protocol broker/market onboarding across EMEA & MENA.
    - Re-architected CI/CD pipelines and contributed to UNIX SA community.
`);
                break;

            case "certs":
            case "certifications":
                appendTerminalOutput(`
<span class="term-yellow">CERTIFICATIONS & ACCREDITATIONS:</span>
  • <span class="term-green">Accredited Enterprise Engineer</span> - HSBC (2023)
    <span class="term-dim">→ Strategic technical leadership, enterprise architecture standards & code governance.</span>
  • <span class="term-cyan">Google Cloud Certified</span> - Professional Cloud Architect (2023)
  • <span class="term-cyan">Certified Ethical Hacker (CEH)</span> - Cryptus Cyber Security (2017)
  • <span class="term-cyan">B.Tech, Information Technology</span> - KIIT Bhubaneswar (2015-2019)
`);
                break;

            case "awards":
                appendTerminalOutput(`
<span class="term-yellow">HONORS & AWARDS:</span>
  🏆 <span class="term-green">Pat on the Back Award (2025)</span> - Codebase refactoring & IT Service Ownership governance
  🏆 <span class="term-green">Circle of Excellence Award (2022)</span> - Automation improving production hygiene and cross-team communication
  🏆 <span class="term-green">Star Performer Award (2021)</span> - CI/CD pipeline rewrite with improved security and compliance controls
  🏆 <span class="term-green">Pat on the Back Award (2019)</span> - UAT ownership & monitoring automation
`);
                break;

            case "contact":
                appendTerminalOutput(`
<span class="term-cyan">CONNECT WITH ABHISHEK:</span>
  📧 Email    : <a href="mailto:abhishekraha0001@gmail.com" class="term-green">abhishekraha0001@gmail.com</a>
  💼 LinkedIn : <a href="https://www.linkedin.com/in/abhishek-raha/" target="_blank" class="term-cyan">linkedin.com/in/abhishek-raha</a>
  🐙 GitHub   : <a href="https://github.com/abhishekraha" target="_blank" class="term-yellow">github.com/abhishekraha</a>
  🐦 X        : <a href="https://x.com/abhishek_raha_" target="_blank" class="term-coral">x.com/abhishek_raha_</a>
`);
                break;

            case "cat resume.json":
                appendTerminalOutput(`<pre class="term-dim">${JSON.stringify(resumeData, null, 2)}</pre>`);
                break;

            case "whoami":
                appendTerminalOutput(`<span class="term-cyan">visitor@ai-lead-edge</span> (authorized visitor, TLS v1.3 encrypted)`);
                break;

            case "clear":
            case "cls":
                terminalOutput.empty();
                break;

            default:
                appendTerminalOutput(`<span class="term-coral">zsh: command not found: ${escapeHtml(cmd)}</span>. Type <span class="term-yellow">'help'</span> for a list of commands.`);
                break;
        }
    }

    if (terminalInput.length) {
        terminalInput.on("keydown", function (e) {
            if (e.key === "Enter") {
                const val = $(this).val();
                handleTerminalCommand(val);
                $(this).val("");
            } else if (e.key === "ArrowUp") {
                if (historyIndex > 0) {
                    historyIndex--;
                    $(this).val(commandHistory[historyIndex]);
                }
                e.preventDefault();
            } else if (e.key === "ArrowDown") {
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    $(this).val(commandHistory[historyIndex]);
                } else {
                    historyIndex = commandHistory.length;
                    $(this).val("");
                }
                e.preventDefault();
            }
        });
    }

    // Click on suggestion chips
    $(".term-chip").on("click", function () {
        const cmd = $(this).attr("data-cmd");
        if (cmd) {
            handleTerminalCommand(cmd);
        }
    });

    // ==========================================
    // 6. Skills Category Filtering
    // ==========================================
    $(".skill-filter-btn").on("click", function () {
        $(".skill-filter-btn").removeClass("active");
        $(this).addClass("active");
        const category = $(this).attr("data-filter");

        if (category === "all") {
            $(".skillsiknow").fadeIn(300);
        } else {
            $(".skillsiknow").each(function () {
                const itemCats = $(this).attr("data-category") || "";
                if (itemCats.includes(category)) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(200);
                }
            });
        }
    });

    // ==========================================
    // 7. Copy Email to Clipboard
    // ==========================================
    $("#copy-email-btn").on("click", function () {
        const email = "abhishekraha0001@gmail.com";
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(function () {
                const btn = $("#copy-email-btn");
                const originalHtml = btn.html();
                btn.html('<i class="fa fa-check" style="color:#10b981;"></i> Copied to Clipboard!');
                setTimeout(() => {
                    btn.html(originalHtml);
                }, 2500);
            });
        }
    });

});
