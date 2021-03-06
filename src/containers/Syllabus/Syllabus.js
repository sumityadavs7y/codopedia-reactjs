import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar';
import CodeIcon from '@material-ui/icons/Code';

// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import './material.module.css';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    container: {
        marginTop: theme.spacing(2)
    },
    appBar: {
        zIndex: theme.zIndex.drawer,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 900,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    icon: {
        backgroundColor: '#f4fcf6',
        color: '#022d8a',
        verticalAlign: 'middle',
        borderRadius: '50%',
        padding: '6px',
        fontSize: '2.5rem'
    },
    indexTitle: {
        fontSize: '25px'
    }
}));

// background-color: #f4fcf6;
//     color: #022d8a;
//     vertical-align: middle;
//     border-radius: 50%;
//     padding: 6px;

const material = (

    <div>
        <article id="section-1">
            <header>
                <h1>Overview<span>Last updated: 2020-09-03</span></h1>
                <section>
                    <p>An Overview of all the Subjects which are mainly asked in almost all top companies interviews.</p>
                </section>{/*//docs-intro*/}
                <h5>Note:</h5>
                <p>*Subjects are in Order of their importance for interviews. </p>
                <br />
                <ul>
                    <li>Data Structure and Algorithms</li>
                    <li>Database Management System</li>
                    <li>Object Oriented Programming</li>
                    <li>Object Oriented Design of Systems</li>
                    <li>System Design</li>
                    <li>Computer Networking</li>
                </ul>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                </div>{/*//docs-code-block*/}
            </header>
            <section id="item-1-1">
                <h2>Data Structures &amp; Algorithms</h2><br />
                <h5>1. Analysis of Algorithms</h5>
                <ul>
                    <li>Growth of functions</li>
                    <li>Asymptotic Notations Omega, Theta,</li>
                    <li>Recursion Tree Method</li>
                    <li>Space Complexity</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/smelly-code/an-ode-to-asymptotic-notations-64753506bbf1" target="_blank">An Ode to Asymptotic Analysis</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/@mntknwr/what-is-asymptotic-notation-types-of-asymptotic-notations-9be3e0e5a2ab" target="_blank">Introduction and types</a>
                <br />
                <a rel="noreferrer" href="https://www.interviewbit.com/courses/programming/topics/time-complexity/" target="_blank">Practice Here</a><br />
                <br />
                <h5>2. Arrays </h5>
                <ul>
                    <li>Insertion, Deletion, Updation, Shifting</li>
                    <li>Reversal, Sort Check, Maximum, Minimum</li>
                    <li>Kadane’s Algorithm</li>
                    <li>Shuffling Algorithms</li>
                    <li>Sliding Window</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.freecodecamp.org/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/" target="_blank">Visualizing Arrays</a>
                <br />
                <a rel="noreferrer" href="https://www.cs.fsu.edu/~myers/c++/notes/arrays.html" target="_blank">Introduction and Operations</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d" target="_blank">Kadane’s Algorithm</a>
                <br />
                <a rel="noreferrer" href="https://leetcode.com/problems/minimum-window-substring/discuss/26808/here-is-a-10-line-template-that-can-solve-most-substring-problems">Master Sliding Window</a>
                <br /><br />
                <h5>3. Hashing</h5>
                <ul>
                    <li>Introduction to Hashing</li>
                    <li>Collision Handling</li>
                    <li>Chaining Vs Open Addressing</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/swlh/hashing-revealed-7ea5169d7a06" target="_blank">Introduction</a>
                <br />
                <a rel="noreferrer" href="https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html" target="_blank">More On Hashing</a>
                <br /><br />
                <h5>4. Searching</h5>
                <ul>
                    <li>Linear Search</li>
                    <li>Binary Search</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.freecodecamp.org/news/linear-search/" target="_blank">Linear Search</a>
                <br />
                <a rel="noreferrer" href="https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search" target="_blank">Binary Search</a>
                <br /><br />
                <h5>5. Sorting</h5>
                <ul>
                    <li>Bubble Sort</li>
                    <li>Selection Sort</li>
                    <li>Insertion Sort</li>
                    <li>Quick Sort and Different Partition Schemes</li>
                    <li>Merge Sort</li>
                    <li>Heap Sort</li>
                    <li>Counting Sort</li>
                    <li>Radix Sort</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/basecs/sorting-out-the-basics-behind-sorting-algorithms-b0a032873add" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/basecs/tagged/sorting-algorithms" target="_blank">All Sortings</a>
                <br /><br />
                <h5>4. Linked List</h5>
                <ul>
                    <li>Drawbacks of Arrays</li>
                    <li>Singly Linked List</li>
                    <li>Doubly Linked List</li>
                    <li>Circular Linked List</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d" target="_blank">Introduction Part-1</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996" target="_blank">Introduction Part-2</a>
                <br />
                <a rel="noreferrer" href="https://algodaily.com/lessons/what-is-the-linked-list-data-structure?view=article" target="_blank">Types</a>
                <br /><br />
                <h5>5. Stack</h5>
                <ul>
                    <li>Introduction</li>
                    <li>Implementataion using array, Linked List</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/basecs/stacks-and-overflows-dbcf7854dc67" target="_blank">Introduction</a>
                <br />
                <a rel="noreferrer" href="https://www.cs.bu.edu/teaching/c/stack/array/" target="_blank">Array Implementataion</a>
                <br />
                <a rel="noreferrer" href="https://www.cs.bu.edu/teaching/c/stack/linked-list/" target="_blank">Linked List Implementataion</a>
                <br /><br />
                <h5>5. Queue </h5>
                <ul>
                    <li>Introduction</li>
                    <li>Implementataion using array, Linked List</li>
                    <li>Dequeue</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/basecs/to-queue-or-not-to-queue-2653bcde5b04" target="_blank">Introduction</a>
                <br />
                <a rel="noreferrer" href="https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html" target="_blank">More on Queues</a>
                <br />
                <a rel="noreferrer" href="https://www.studytonight.com/data-structures/queue-data-structure" target="_blank">Implementataion</a>
                <br /><br />
                <h5>6. Tree </h5>
                <ul>
                    <li>Introduction</li>
                    <li>Traversals(Inorder,preoder,postorder,level order)</li>
                    <li>Binary Search Tree</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/the-renaissance-developer/learning-tree-data-structure-27c6bb363051" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/@hb8130524691/what-is-tree-bcf3fd3d9308" target="_blank">Types of Trees</a>
                <br />
                <a rel="noreferrer" href="https://towardsdatascience.com/4-types-of-tree-traversal-algorithms-d56328450846" target="_blank">Tree Traversals</a>
                <br /><br />
                <h5>7. Heap </h5>
                <ul>
                    <li>Introduction</li>
                    <li>Heap Sort</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/basecs/learning-to-love-heaps-cef2b273a238" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=HqPJF2L5h9U&t=179s&ab_channel=AbdulBari" target="_blank">Video Explaination</a>
                <br />
                <a rel="noreferrer" href="https://www.cs.cmu.edu/~adamchik/15-121/lectures/Binary%20Heaps/heaps.html" target="_blank">Implementataion</a>
                <br /><br />
                <h5>8. Recursion &amp; Backtracking </h5>
                <ul>
                    <li>Introduction</li>
                    <li>Problems</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=_OmRGjbyzno&list=PL2_aWCzGMAwLz3g66WrxFGSXvSsvyfzCO&ab_channel=mycodeschool" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=kHi1DUhp9kM&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&ab_channel=AdityaVerma" target="_blank">Practice Problems</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=DKCbsiDBN6c&t=65s&ab_channel=AbdulBari" target="_blank">Backtracking</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/leetcode-patterns/leetcode-pattern-3-backtracking-5d9e5a03dc26" target="_blank"> Pattern to solve Questions </a>
                <br /><br />
                <h5>9. Graph </h5>
                <ul>
                    <li>Representations</li>
                    <li>DFS &amp; BFS</li>
                    <li>Cycle Detection: Directed and Undirected</li>
                    <li>Topological Sort</li>
                    <li>Shortest Path Problems</li>
                    <li>Prims Algorithm</li>
                    <li>Dijkstra’s Algorithm</li>
                    <li>Bellman Ford Algorithm</li>
                    <li>Kosaraju’s Algorithm</li>
                    <li>Articulation Point</li>
                    <li>Bridges in Graph</li>
                    <li>Tarjan’s Algorithm</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8" target="_blank">Basics Part-1</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/basecs/from-theory-to-practice-representing-graphs-cfd782c5be38" target="_blank">Basics Part-2</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=DgXR2OWQnLc&list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P&ab_channel=WilliamFiset" target="_blank">Full Graph Course</a>
                <br />
                <a rel="noreferrer" href="https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/tutorial/" target="_blank">Hackerearth</a>
                <br /><br />
                <h5>10. Dynammic Programming </h5>
                <ul>
                    <li>Introduction</li>
                    <li>Memoization &amp; Tabulation</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=nqowUJzG-iM&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&ab_channel=AdityaVerma" target="_blank">Standard Problems</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=8LusJS5-AGo&list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr&ab_channel=TusharRoy-CodingMadeSimple" target="_blank">More Standard Problems </a>
                <br /><br />
                <h5>10. Tries </h5>
                <ul>
                    <li>Introduction</li>
                    <li>Insert, Search, Delete</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014s" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014" target="_blank">Implementataion</a>
                <br />
                <a rel="noreferrer" href="https://leetcode.com/problems/implement-trie-prefix-tree/" target="_blank">Practice Problem </a>
                <br /><br />
                <h5>11. Segment Trees </h5>
                <ul>
                    <li>Introduction</li>
                    <li>Constructions</li>
                    <li>Range and Update Query</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/tutorial/" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://kartikkukreja.wordpress.com/2014/11/09/a-simple-approach-to-segment-trees/" target="_blank">Implementataion</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/@iamcrypticcoder/segment-tree-note-1-11245fbf3ed6" target="_blank">Problems</a>
                <br /><br />
                <h5>12. Disjoint Sets</h5>
                <ul>
                    <li>Introduction</li>
                    <li>Union-Find</li>
                    <li>Union by rank, Path Compression</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.hackerearth.com/practice/notes/disjoint-set-union-union-find/" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://www.cs.princeton.edu/~rs/AlgsDS07/01UnionFind.pdf" target="_blank">Union-Find</a>
                <br />
                <a rel="noreferrer" href="https://cp-algorithms.com/data_structures/disjoint_set_union.html" target="_blank">Implementataion</a>
                <br /><br />
            </section>{/*//section*/}
            <section id="item-1-2">
                <h2>Database Management System</h2><br />
                <ul>
                    <li>Introduction to DBMS	</li>
                    <li>Architectures</li>
                    <li>ER Model</li>
                    <li>Relational Model</li>
                    <li>Keys in Relational Model</li>
                    <li>Database Normalization</li>
                    <li>Normal Forms</li>
                    <li>Concurrency Control</li>
                    <li>Indexing in Database</li>
                    <li>B+ Tree Introduction</li>
                    <li>SQL</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.javatpoint.com/dbms-tutorial" target="_blank">Documentation</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&ab_channel=GateSmashers" target="_blank">Video tutorial</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=aZjYr87r1b8&ab_channel=AbdulBari" target="_blank"> B Tree</a>
                <br />
                <a rel="noreferrer" href="https://www.w3schools.com/sql/" target="_blank">SQL Basics</a>
                <br />
                <a rel="noreferrer" href="https://sqlbolt.com/" target="_blank"> Practice Here(SQL)</a>
                <br />
                <a rel="noreferrer" href="https://www.hackerrank.com/domains/sql" target="_blank">Solve Queries here</a>
                <br /><br />
            </section>
            <section id="item-1-3">
                <h2>Object Oriented Programming</h2><br />
                <ul>
                    <li>Classes and Objects</li>
                    <li>Inheritance and Polymorphism : Overloading and Overriding</li>
                    <li>Abstraction and Encapsulation</li>
                    <li>Access Modifiers</li>
                    <li>Friend and Virtual functions in C++</li>
                    <li>VTable and VPointer</li>
                    <li>static, final, this and super keywords and Interfaces in Java</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.tutorialspoint.com/cplusplus/cpp_classes_objects.htm" target="_blank">Documentation</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/from-the-scratch/oop-everything-you-need-to-know-about-object-oriented-programming-aee3c18e281b" target="_blank">OOPS Explaination</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=EHlS220qNwI&list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF&index=19&ab_channel=C%2B%2BbySaurabhShuklaSir" target="_blank">Video Tutorial</a>
                <br />
                <a rel="noreferrer" href="https://practice.geeksforgeeks.org/batch/fork-cpp" target="_blank">CPP Course</a>
                <br />
                <a rel="noreferrer" href="https://practice.geeksforgeeks.org/batch/fork-java" target="_blank">Java Course</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/edureka/oops-interview-questions-621fc922cdf4" target="_blank">OOPs Interview Questions</a>
                <br /><br />
                <br /><br /><br />
            </section>
            <section id="item-1-4">
                <h2>Object Oriented Design</h2><br />
                <ul>
                    <li>Introduction to Object and Classes</li>
                    <li>Software Development Process</li>
                    <li>UML and its importance</li>
                    <li>Class Diagrams &amp; Object Diagrams</li>
                    <li>Use-case Diagrams</li>
                    <p>BookMyShow : Movie ticket booking application</p>
                    <p>MyFlipCart : Complete e-commerce application</p>
                    <p>ParkingLot : Automated Solution for Parking-Lots</p>
                    <p>BlackJack : Most popular card game in casinos</p>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://medium.com/@nrkapri/object-oriented-design-principles-4f6a1d6adcde" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://github.com/prasadgujar/low-level-design-primer" target="_blank">Github</a>
                <br />
                <a rel="noreferrer" href="https://plan.io/blog/software-development-process/" target="_blank">Software Development Process</a>
                <br />
                <a rel="noreferrer" href="https://medium.com/@nrkapri/how-to-approach-object-oriented-design-questions-step-by-step-67ed6a5a30e5" target="_blank">How to Approach Problem?</a>
                <br />
                <a rel="noreferrer" href="https://creately.com/blog/diagrams/use-case-diagram-tutorial/" target="_blank">All About Use Case Diagrams</a>
                <br />
                <a rel="noreferrer" href="https://www.geeksforgeeks.org/design-movie-ticket-booking-system-like-bookmyshow/" target="_blank">OO Design Example</a>
                <br /><br />
            </section>
            <section id="item-1-5">
                <h2>System Design</h2><br />
                <p>1: Networks &amp; Protocols (IP, DNS, HTTP, TCP etc)<br />
                    2: Storage, Latency &amp; Throughput<br />
                    3: Availability<br />
                    4: Caching<br />
                    5: Proxies<br />
                    6: Load Balancing<br />
                    7: Consistent Hashing<br />
                    8: Databases<br />
                    9: Leader Election<br />
                    10: Polling, Streaming, Sockets<br />
                    11: Endpoint Protection<br />
                    12: Messages &amp; Pub-Sub<br />
                    13: Smaller Essentials<br />
                </p>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.freecodecamp.org/news/systems-design-for-interviews/" target="_blank">Basics</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=xpDnVSmNFX0&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX&ab_channel=GauravSen" target="_blank">Tutorials to Start With</a>
                <br />
                <a rel="noreferrer" href="https://github.com/donnemartin/system-design-primer" target="_blank">Github</a>
                <br />
                <a rel="noreferrer" href="https://drive.google.com/file/d/1B-tWvLpRHNV3ovDzJRugvDkUlkltUgHg/view" target="_blank">System Design Problems</a>
                <br />
                <a rel="noreferrer" href="https://www.educative.io/courses/grokking-the-system-design-interview" target="_blank">Best Course on System Design</a>
                <br /><br />
            </section>
            <section id="item-1-6">
                <h2>Computer Networking</h2><br />
                <ul>
                    <li>Introduction to Computer Networks</li>
                    <li>TCP/IP vs OSI Model</li>
                    <li>Circuit Switching vs Packet Switching</li>
                    <li>Flow Control Protocols </li>
                    <li>IP and Classful Addressing</li>
                    <li>Classless Addressing</li>
                    <li>Routing Protocols</li>
                    <li>ARP &amp; DHCP</li>
                    <li>Transport Layer</li>
                    <li>TCP &amp; UDP/li&gt;
                    </li><li>Application Layer</li>
                </ul>
                <h5> Refer:</h5>
                <a rel="noreferrer" href="https://www.javatpoint.com/computer-network-tutorial" target="_blank">Documentation</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=VwN91x5i25g&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&ab_channel=NesoAcademy" target="_blank">Basic to advanced</a>
                <br />
                <a rel="noreferrer" href="https://www.youtube.com/watch?v=Eg6ibIGxeGc&ab_channel=edureka%21" target="_blank">Common Interview Questions</a>
                <br /><br />
            </section>
        </article>
    </div>
);


const Syllabus = (props) => {
    const classes = useStyles();
    const drawer = (
        <Box className={classes.drawer} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'block' }}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <div>
                        <CodeIcon className={classes.icon} /> <span className={classes.indexTitle}>Syllabus</span>
                    </div>
                    {/* <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List> */}
                </div>
            </Drawer>
        </Box>
    );
    return (
        <React.Fragment>
            <div className={classes.root}>
                {drawer}
                <main className={classes.content}>
                    <Container>
                        {material}
                    </Container>
                </main>
            </div>
        </React.Fragment>
    );
}

export default Syllabus;