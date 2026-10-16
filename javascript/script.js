$(document).ready(function () {

    // ==========================================
    // 1. Hero Typewriter Effect
    // ==========================================
    const keywords = [
        "Senior Backend Engineer @ HSBC Cash Equities",
        "Low-Latency Trading Systems & OMS Architecture",
        "Production Support for OMS & Market Connectivity",
        "Accredited Enterprise Engineer (HSBC)",
        "Google Cloud Certified Professional Cloud Architect",
        "Active AI-Driven Software Engineering & Agent Workflows",
        "Core Java • Scala • Aeron • Apache Kafka • FIX Protocol",
        "I build things, break things, fix things, and engineer robust systems"
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
        title: "Senior Backend Engineer | Java | Low-Latency Systems | AI-Native Development",
        accreditations: "Accredited Enterprise Engineer (HSBC)",
        experience: "7+ years in mission-critical financial technology (HSBC Cash Equities)",
        focus: ["Low-Latency Trading", "OMS Architecture", "Market Connectivity", "Production Support", "AI Coding Agents"],
        location: "India",
        contacts: {
            email: "abhishekraha0001@gmail.com",
            phone: "+91 9078802424",
            linkedin: "https://www.linkedin.com/in/abhishek-raha/",
            github: "https://github.com/abhishekraha",
            website: "https://abhishekraha.github.io/AbhishekRaha/"
        },
        skills: {
            languages: ["Core Java", "Scala", "Python", "SQL", "Shell Scripting", "Groovy"],
            distributed: ["Apache Kafka", "Aeron", "FIX Protocol", "Trading Gateways", "OMS"],
            production_support: ["OMS Support", "Market Connectivity", "Live Incident Triage", "Disaster Recovery", "RCAs"],
            cloud_devops: ["GCP", "IaC (Ansible/Terraform)", "Docker", "Podman", "Jenkins CI/CD", "UNIX/Linux", "Git"],
            ai_engineering: ["Hands-on Development with Coding Agents", "Feature Implementation", "Automated Testing", "Reusable Skills"]
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
            line.innerHTML = `<span class="term-cyan">abhishek@fintech-gw:~$</span> <span class="term-bold">${escapeHtml(text)}</span>`;
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
  <span class="term-cyan">summary</span>      - Display professional background & engineering summary
  <span class="term-cyan">stack</span>        - List backend, low-latency, and cloud tech stack
  <span class="term-cyan">support</span>      - View Production Support for OMS & Market Connectivity
  <span class="term-cyan">metrics</span>      - Show selected achievements and performance impact
  <span class="term-cyan">experience</span>   - View detailed HSBC career progression
  <span class="term-cyan">ai</span>           - Learn about hands-on software development using AI
  <span class="term-cyan">certs</span>        - Show HSBC Enterprise Engineer, GCP Cloud Architect credentials
  <span class="term-cyan">awards</span>       - View HSBC recognition & awards
  <span class="term-cyan">cat resume.json</span> - Dump full profile as formatted JSON
  <span class="term-cyan">contact</span>      - Get email, LinkedIn, and GitHub links
  <span class="term-cyan">whoami</span>       - Display visitor session telemetry
  <span class="term-cyan">clear</span>        - Clear the terminal console
`);
                break;

            case "summary":
                appendTerminalOutput(`
<span class="term-bold">ABHISHEK RAHA</span> | <span class="term-green">Senior Backend Engineer & HSBC Accredited Enterprise Engineer</span>
• 7+ years of experience building, scaling, and operating mission-critical financial software at HSBC Cash Equities.
• Strong Core Java background across low-latency trading systems, OMS components, gateways, FIX connectivity, and event-driven messaging with Kafka and Aeron.
• Extensive experience in <span class="term-cyan">Production Support for OMS and Market Connectivity</span>, live trading triage, and DR governance.
• Hands-on <span class="term-green">AI-Native Software Development</span>: actively engineering features, automated tests, and multi-file refactoring using coding agents.
• IT Service Owner overseeing disaster recovery, audit compliance, and Google Cloud provisioning via IaC.
`);
                break;

            case "stack":
            case "skills":
                appendTerminalOutput(`
<span class="term-yellow">CORE TECH STACK:</span>
  <span class="term-coral">[Backend & Distributed]</span> : Core Java, Scala, Python, SQL, Kafka, Aeron, FIX Protocol, OMS, Trading Gateways
  <span class="term-cyan">[Production Support]</span>    : OMS & Market Connectivity Support, Live Incident Triage, Exchange Feeds, RCAs, DR
  <span class="term-cyan">[Cloud & DevOps]</span>        : Google Cloud Platform (GCP), IaC (Ansible), Jenkins CI/CD, Docker, Podman, Git
  <span class="term-green">[AI-Driven Dev]</span>         : Full-Cycle Feature Engineering with Coding Agents, Test Generation, Refactoring
  <span class="term-yellow">[Systems & UNIX]</span>        : Working knowledge of UNIX / Linux environments, Shell Scripting, SA Contributor
`);
                break;

            case "support":
            case "prod-support":
                appendTerminalOutput(`
<span class="term-coral">🚨 PRODUCTION SUPPORT & MARKET CONNECTIVITY:</span>
  • Frontline Production Support for high-volume Order Management Systems (OMS) and FIX trading gateways.
  • Real-time triage of live order-flow anomalies, session drops, and market-data connectivity across EMEA & MENA.
  • Lead post-incident Root Cause Analyses (RCAs) and implement permanent preventative architectural fixes.
  • IT Service Owner leading disaster-recovery (DR) drills, failover testing, and vulnerability remediation.
`);
                break;

            case "metrics":
            case "achievements":
                appendTerminalOutput(`
<span class="term-green">⚡ SELECTED ACHIEVEMENTS & IMPACT:</span>
  1. <span class="term-cyan">5-6 min</span> processing speedup via targeted application refactoring & performance engineering in low-latency trading.
  2. <span class="term-cyan">90%</span> reduction in privileged production access by automating release pipelines and governance.
  3. <span class="term-cyan">95%</span> IT compliance adherence achieved via custom release-metrics and policy-breach monitoring.
  4. <span class="term-cyan">0 Downtime</span> achieved across critical OMS component upgrades and direct broker routing migrations.
  5. Pioneered active AI-native software development and reusable agent workflows adopted by engineering peers.
`);
                break;

            case "experience":
            case "work":
                appendTerminalOutput(`
<span class="term-yellow">PROFESSIONAL CAREER (HSBC Technology):</span>
  • <span class="term-green">Consultant Specialist</span> [Nov 2023 - Present]
    - Lead 3 engineers through legacy vendor migration to strategic Cash Equities solution.
    - Provisioned Google Cloud environments using Infrastructure as Code (IaC).
    - IT Service Owner for mission-critical trading application (DR, audit, security governance).
    - Championed active AI-driven software development across feature delivery and migrations.

  • <span class="term-green">Senior Software Developer</span> [Feb 2022 - Nov 2023]
    - Delivered frontline Production Support for OMS and Market Connectivity during live market sessions.
    - Decoupled legacy OMS components, slashing latency and accelerating feature delivery.
    - Implemented direct broker routing bypassing intermediary hops.
    - Upgraded key OMS components with zero unplanned downtime.

  • <span class="term-green">Software Developer</span> [Jul 2019 - Jan 2022]
    - Led FIX Protocol broker/market onboarding across EMEA & MENA.
    - Re-architected CI/CD pipelines and contributed to UNIX SA community.
`);
                break;

            case "certs":
            case "certifications":
                appendTerminalOutput(`
<span class="term-yellow">CERTIFICATIONS & CREDENTIALS:</span>
  • <span class="term-green">Accredited Enterprise Engineer</span> - HSBC (2023)
    <span class="term-dim">→ Focused on strategic technical leadership, enterprise architecture standards & operational governance.</span>
  • <span class="term-cyan">Google Cloud Certified</span> - Professional Cloud Architect (2023)
  • <span class="term-cyan">Certified Ethical Hacker</span> - Cryptus Cyber Security (2017)
  • <span class="term-cyan">B.Tech, Information Technology</span> - KIIT Bhubaneswar (2015-2019)
`);
                break;

            case "awards":
                appendTerminalOutput(`
<span class="term-yellow">HONORS & AWARDS:</span>
  🏆 <span class="term-green">Pat on the Back Award (2025)</span> - Codebase refactoring & IT Service Ownership governance
  🏆 <span class="term-green">Circle of Excellence Award (2022)</span> - Production hygiene & cross-team automation
  🏆 <span class="term-green">Star Performer Award (2021)</span> - CI/CD pipeline rewrite & compliance controls
  🏆 <span class="term-green">Pat on the Back Award (2019)</span> - UAT ownership & monitoring automation
`);
                break;

            case "ai":
                appendTerminalOutput(`
<span class="term-green">🤖 ACTIVE AI-DRIVEN SOFTWARE DEVELOPMENT:</span>
  • Not just prompt iteration: actively writing code, building features, and refactoring with AI coding agents.
  • Integrating autonomous agents into the day-to-day loop for end-to-end implementation and automated test synthesis.
  • Rigorous benchmarking and verification of AI-generated components against low-latency & strict banking compliance standards.
  • Building custom domain skills and reusable subagent workflows to eliminate repetitive engineering toil.
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
                appendTerminalOutput(`<span class="term-cyan">guest@fintech-edge</span> (authorized visitor, TLS v1.3 encrypted)`);
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
