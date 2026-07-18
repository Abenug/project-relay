# Project Relay

# System Architecture

Version: 1.0

---

# 1. System Overview

Project Relay is a package relay platform built on top of existing public transportation routes.

The system does not operate as a delivery company.

Instead:

- Drivers create trips based on journeys they already plan to make.
- Senders register packages that need transportation.
- Drivers accept packages matching their route.
- Receivers track their packages in real time.

The system provides visibility, communication, and trust between users.

---

# 2. High-Level Architecture


```
                Flutter Mobile App

                       |

                       |

                Backend Server

                       |

        --------------------------------

        |                              |

    Database                 Real-Time Service

        |                              |

        |                              |

     User Data                  Live Location


                       |

              External Services

        --------------------------------

        |                              |

    Maps Service                 SMS Service
