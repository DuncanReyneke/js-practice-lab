## 2025-10-14 — Day 1

**Topic:** JavaScript Basics — Intro & Alerts  
**Notes:**

- Practiced `alert()`, `document.querySelector()`, and `textContent`.
- Confirmed DOM update after sequential alerts.
- Skipped GitHub push for this exercise (pure fundamentals).
- Tomorrow: start “Variables & Constants” lesson.

---

Notes on section:

JS runs by hooking into the DOM and making changes to the onpage HTML / CSS. We use a script tag to link it in.

The DOM is the structure of the website and is the canvas upon which JS acts.

Script tag tells the page to look out for Javascript associated with it and points the page at that actual file.

---

Variables

• When to use let vs const
var is problematic because of how easily it allows its content to be overwritten later on. Enter: const and let.

    Const:
        variable value won't change. Can't manipulate it. Can't redeclare it, either.
    Let:
        use when variables need to be able to be reassigned. Same as var but won't let you reassign. More protection.

• How scope works (block vs function)
Function scope: variables are exclusively accessible within the function they are declared in.

    Block scope: variables are accessible only within the block (e.g., within {} ) they are declared in.

    Block is the better, more modern version. If it's between {}, that's the scope.

• Example of reassignment error (TypeError: Assignment to constant variable)
const name = "Duncan"
name = "Duncan Reyneke"
