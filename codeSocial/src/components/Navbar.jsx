import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./../styles/Navbar.css";
import authService from "../services/authService";
import { Modal, Button } from "react-bootstrap";
import { BsBell, BsFillExclamationCircleFill, BsCheckCircleFill } from "react-icons/bs"; // Íconos de React

const Navbar = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true); // Estado para el colapso del navbar
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const [notifications, setNotifications] = useState([]); // Estado para las notificaciones

  // Simulación de obtener notificaciones (puedes cambiarlo por una API real)
  const fetchNotifications = () => {
    const notificationsData = [
      { id: 1, message: "¡Nuevo comentario en tu publicación!", type: "info" },
      { id: 2, message: "Tu solicitud de amistad ha sido aceptada.", type: "success" },
      { id: 3, message: "Recuerda que tu perfil debe ser completado.", type: "warning" },
      { id: 4, message: "Tienes una nueva invitación a un grupo.", type: "success" },
      { id: 5, message: "El sistema estará en mantenimiento el próximo viernes.", type: "info" }
    ];
    setNotifications(notificationsData);
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const user = JSON.parse(currentUser);
      console.log("Usuario actual:", user); 
      setIsLoggedIn(true);
      setIsAdmin(user.email === "pepe@admin.com");
      setUserName(user.nombre || user.name || user.email);
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
      setUserName("");
    }
  };

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserName("");
    navigate("/");
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed); // Cambia el estado de colapso
  };

  const handleShowModal = () => {
    fetchNotifications(); // Obtener las notificaciones cuando se abre el modal
    setShowModal(true); // Mostrar el modal
  };

  const handleCloseModal = () => setShowModal(false); // Cerrar el modal

  const getIconByType = (type) => {
    switch(type) {
      case "success":
        return <BsCheckCircleFill className="text-success me-2" />;
      case "warning":
        return <BsFillExclamationCircleFill className="text-warning me-2" />;
      case "info":
      default:
        return <BsBell className="text-primary me-2" />;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Code Coffee Logo"
            className="me-2"
            style={{ height: "50px" }}
          />
          <span className="fw-bold">Code+Social</span>
        </Link>

        {/* Toggler (Hamburguesa) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/home">
                INICIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/news">
                NOTICIAS
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link fw-bold btn" onClick={handleShowModal}>
                NOTIFICACIONES
              </button>
            </li>
          </ul>

          {/* Actions */}
          <div className="d-flex align-items-center gap-3 justify-content-end">
            <button
              className="btn btn-success d-flex align-items-center"
              onClick={() => navigate("/ubicaciones")}
            >
              <i className="bi bi-geo-alt me-2"></i> Encuentra sedes UTP
            </button>

            {isLoggedIn ? (
              <div className="dropdown ms-2 position-relative">
                <button 
                  className="btn btn-light dropdown-toggle d-flex align-items-center gap-2 user-menu-button" 
                  type="button" 
                  id="userMenuButton" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle fs-5"></i>
                  <span className="fw-medium">{userName}</span>
                </button>
                <ul 
                  className="dropdown-menu shadow-sm custom-dropdown-menu" 
                  aria-labelledby="userMenuButton"
                >
                  {isAdmin && (
                    <>
                      <li>
                        <Link to="/dashboard" className="dropdown-item py-2">
                          <i className="bi bi-speedometer2 me-2"></i>
                          Panel de Admin
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                    </>
                  )}
                  <li>
                    <Link to="/perfil" className="dropdown-item py-2">
                      <i className="bi bi-person me-2"></i>
                      Información Personal
                    </Link>
                  </li>
                  <li>
                    <Link to="/configuracion" className="dropdown-item py-2">
                      <i className="bi bi-gear me-2"></i>
                      Configuraciones
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider"/></li>
                  <li>
                    <button 
                      className="dropdown-item py-2 text-danger" 
                      onClick={handleLogout}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-dark">
                  Iniciar Sesión
                </Link>
                <Link to="/registro" className="btn btn-dark">
                  Regístrate
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal Notificaciones */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg" animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Notificaciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notifications.length > 0 ? (
            <div className="notification-list">
              {notifications.map((notification) => (
                <div key={notification.id} className={`notification-item notification-${notification.type}`}>
                  {getIconByType(notification.type)}
                  <span>{notification.message}</span>
                </div>
              ))}
            </div>
          ) : (
            <p>No tienes notificaciones.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
};

export default Navbar;
