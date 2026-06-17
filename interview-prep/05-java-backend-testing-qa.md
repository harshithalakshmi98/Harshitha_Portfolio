# 05 — Java, Backend, Testing & Databases (Interview Q&A)

Based on Coffee Shop, Auction House, and your skills.

---

## Java fundamentals

**Q: JVM vs JDK vs JRE?**  
**A:** JRE runs Java programs; JDK includes compiler/tools; JVM executes bytecode on any platform ("write once, run anywhere").

**Q: `==` vs `.equals()`?**  
**A:** `==` compares references for objects; `.equals()` compares content (when properly overridden).

**Q: `ArrayList` vs `LinkedList`?**  
**A:** ArrayList fast random access; LinkedList fast inserts/deletes in middle. Orders/menu lists usually ArrayList.

**Q: `HashMap` internals (simple)?**  
**A:** Key-value buckets; hash function picks bucket; collisions handled by chaining or tree (Java 8+).

**Q: Checked vs unchecked exceptions?**  
**A:** Checked must be declared/handled (IOException); unchecked extend RuntimeException (IllegalArgumentException).

---

## OOP (tie to your projects)

**Q: Design a coffee order system — what classes?**  
**A:** `Menu`, `MenuItem`, `Order`, `LineItem`, `Customer`, `Bill`, `DiscountPolicy`, `OrderRepository`, `PaymentService`. UI layer separate from domain.

**Q: SOLID — quick definitions?**  
**A:**  
- **S**ingle responsibility — one reason to change  
- **O**pen/closed — extend without modifying core  
- **L**iskov — subclasses honor base contract  
- **I**nterface segregation — small interfaces  
- **D**ependency inversion — depend on abstractions  

**Q: Singleton pattern — when and caution?**  
**A:** One global instance (event log). Caution: testing harder, hidden dependencies; thread safety required.

---

## Java Swing

**Q: Event Dispatch Thread (EDT)?**  
**A:** Swing UI updates must run on EDT; long tasks go to background worker (`SwingWorker`) to avoid frozen UI.

**Q: MVC in Swing context?**  
**A:** Model = domain data; View = JTable/JPanel; Controller = action listeners updating model and refreshing view.

---

## Maven & JUnit

**Q: Maven lifecycle phases?**  
**A:** validate → compile → test → package → verify → install → deploy. `mvn test` runs Surefire.

**Q: JUnit 5 annotations?**  
**A:** `@Test`, `@BeforeEach`, `@ParameterizedTest`, `@DisplayName`.

**Q: Example test for discount logic?**  
**A:** Given cart total 100 and 10% loyalty discount, assert final price 90; edge cases: zero cart, max discount cap.

---

## Concurrency (Coffee Shop)

**Q: What is a thread?**  
**A:** Independent execution path within a process; simulation uses multiple threads for customers/servers.

**Q: `synchronized` keyword?**  
**A:** Mutual exclusion on object monitor — one thread at a time in critical section (event log writes).

**Q: Race condition example?**  
**A:** Two threads increment counter without sync → lost updates. Fix with `synchronized` or `AtomicInteger`.

---

## MySQL / SQL

**Q: Primary key vs foreign key?**  
**A:** PK uniquely identifies row; FK links to PK in another table (order → customer).

**Q: INNER vs LEFT JOIN?**  
**A:** INNER keeps matching rows only; LEFT keeps all left rows plus matches or NULL.

**Q: Index purpose?**  
**A:** Speed up queries on filtered/joined columns; trade-off on write speed and storage.

**Q: Normalization (1NF, 2NF, 3NF) — ELI5?**  
**A:** Don't repeat data awkwardly; split tables so each fact lives in one place (orders vs order_items).

---

## Backend concepts (even if not in every project)

**Q: REST API basics?**  
**A:** HTTP verbs: GET read, POST create, PUT/PATCH update, DELETE remove. Stateless, JSON payloads.

**Q: How would you expose crop disease model?**  
**A:** FastAPI/Flask endpoint; image upload → preprocess → model inference → JSON label + confidence; async queue for scale.

**Q: Authentication vs authorization?**  
**A:** AuthN = who you are; AuthZ = what you're allowed to do.

---

## Real use case tie-in

| Concept | Your project | Industry |
|---------|--------------|----------|
| OOP | Coffee Shop | Enterprise services |
| CSV persistence | Auction, Coffee | ETL prototypes |
| JUnit | Coffee Shop | CI quality gates |
| Concurrency | Coffee simulation | Trading, gaming servers |
| SQL | TCS + skill | Any data-backed app |
