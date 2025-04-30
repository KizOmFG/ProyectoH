import React, { useState } from 'react';
import logo1 from "../assets/images/logo1.jpeg";
import spon from "../assets/images/sponred.jpg";
import "./../styles/Inicio.css";
import pub1 from "../assets/images/pub1.jpg";
import pub2 from "../assets/images/pub2.jpg";
import pub3 from "../assets/images/pub3.jpg";
import pub4 from "../assets/images/pub4.jpg";
import pub5 from "../assets/images/pub5.jpg";
import pub6 from "../assets/images/pub6.jpg";
import pub7 from "../assets/images/pub7.jpg";
import pub8 from "../assets/images/pub8.jpg";
import pub9 from "../assets/images/pub9.jpg";
import pub10 from "../assets/images/pub10.jpg";
import pub11 from "../assets/images/pub11.jpg";
import pub12 from "../assets/images/pub12.jpg";
import pub13 from "../assets/images/pub13.jpg";
import pub14 from "../assets/images/pub14.jpg";
import pub15 from "../assets/images/pub15.jpg";
import usu1 from "../assets/images/historia1.jpg";
import usu2 from "../assets/images/historia2.jpg";
import usu3 from "../assets/images/historia3.jpg";
import usu4 from "../assets/images/historia4.jpg";
import usu5 from "../assets/images/historia5.jpg";
import usu6 from "../assets/images/historia6.jpg";
import usu7 from "../assets/images/historia7.jpg";
import usu8 from "../assets/images/historia8.jpeg";
import usu9 from "../assets/images/historia9.jpeg";

const initialPosts = [
  {
    id: 1,
    profileImage: usu1,
    username: 'Carlos Sotero',
    message: 'Just launched another rocket to Mars! 🚀 #SpaceX',
    image: pub1,
    comments: [],
    likes: 15230,
    loves: 7520
  },
  {
    id: 2,
    profileImage: logo1,
    username: 'Nicolas Brayan',
    message: 'Exploring the future of sustainable energy ☀️ #Tesla',
    image: pub2,
    comments: [],
    likes: 22100,
    loves: 9870
  },
  {
    id: 3,
    profileImage: usu3,
    username: 'Marcos Segura',
    message: 'AI is the next frontier of human innovation 🤖',
    image: pub3,
    comments: [],
    likes: 18750,
    loves: 6430
  },
  {
    id: 4,
    profileImage: usu2,
    username: 'André Iglesias Gala',
    message: 'The Boring Company: Revolutionizing urban transportation 🚇',
    image: pub4,
    comments: [],
    likes: 12340,
    loves: 5670
  },
  {
    id: 5,
    profileImage: usu5,
    username: 'Anthony Cotrina Vasquez',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub5,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 6,
    profileImage: usu6,
    username: 'Nana Sofia',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub6,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 7,
    profileImage: usu7,
    username: 'Ariadna Romina',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub7,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 8,
    profileImage: usu8,
    username: 'Cesia Roanli',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub8,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 9,
    profileImage: usu9,
    username: 'Giusseppe Taccuchi',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub9,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 10,
    profileImage: usu4,
    username: 'Jhordy Ruiz Yañez',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub10,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 11,
    profileImage: logo1,
    username: 'Andrea Silva Davila',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub11,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 12,
    profileImage: logo1,
    username: 'Brian Danny Silva Davila',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub12,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 13,
    profileImage: logo1,
    username: 'Carlos Salvador Torres',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub13,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 14,
    profileImage: logo1,
    username: 'Zoe Silva',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub14,
    comments: [],
    likes: 20560,
    loves: 8900
  },
  {
    id: 15,
    profileImage: logo1,
    username: 'Jessica Silva Atiquipa',
    message: 'Neuralink making incredible progress in brain-computer interfaces 🧠',
    image: pub15,
    comments: [],
    likes: 20560,
    loves: 8900
  },
];

const Inicio = () => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState(initialPosts);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [profileImage, setProfileImage] = useState(logo1);
  const [username, setUsername] = useState('Brian Silva Davila');

  const handlePost = () => {
    if (message || image) {
      const newPost = {
        id: Date.now(),
        profileImage,
        username,
        message,
        image,
        comments: [],
        likes: 0,
        loves: 0
      };
      setPosts([newPost, ...posts]);
      setMessage('');
      setImage(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleCommentClick = (post) => {
    setSelectedPost(post);
    setCommentModalVisible(true);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const updatedPosts = posts.map((post) => {
        if (post.id === selectedPost.id) {
          return {
            ...post,
            comments: [...post.comments, {
              id: Date.now(),
              text: newComment,
              author: username
            }]
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setNewComment('');
      setCommentModalVisible(false);
    }
  };

  const handleReaction = (post, reactionType) => {
    const updatedPosts = posts.map((p) => {
      if (p.id === post.id) {
        return {
          ...p,
          [reactionType]: (p[reactionType] || 0) + 1
        };
      }
      return p;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-lg-3">
          <div className="left-column">
            <div className="card card-left1 mb-4">
              <img
                src="img/photo-1455448972184-de647495d428.jpg"
                alt=""
                className="card-img-top img-fluid"
              />
              <div className="card-body text-center">
                <input
                  type="file"
                  id="profileImageInput"
                  accept="image/*"
                  className="d-none"
                  onChange={handleProfileImageChange}
                />
                <label htmlFor="profileImageInput">
                  <img
                    src={logo1}
                    alt="Profile"
                    width="120px"
                    height="120px"
                    className="rounded-circle mt-n5 profile-image-editable"
                  />
                </label>
                <input
                  type="text"
                  className="form-control text-center mb-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p className="card-text text-justify mb-2">
                  Hola, soy estudiante de la carrera de Ingenieria de Sistemas e Informatica de la UTP
                </p>
                <ul className="list-unstyled nav justify-content-center">
                  <a href="#" className="text-dark text-decoration-none">
                    <li className="nav-item">
                      Friends <br />
                      <strong>12M</strong>
                    </li>
                  </a>
                  <a href="#" className="text-dark text-decoration-none">
                    <li className="nav-item">
                      Enemies <br />
                      <strong>1</strong>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub1} className="img-fluid rounded-start" alt="Photo 2" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Enero</h5>
                    <p className="card-text">Tus mejores momentos vividos durante Enero</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub1} className="img-fluid rounded-start" alt="Photo 2" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Febrero</h5>
                    <p className="card-text">Tus mejores momentos vividos durante Febrero</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub1} className="img-fluid rounded-start" alt="Photo 2" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Marzo</h5>
                    <p className="card-text">Tus mejores momentos vividos durante Marzo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub1} className="img-fluid rounded-start" alt="Photo 2" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Abril</h5>
                    <p className="card-text">Tus mejores momentos vividos durante Abril</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub1} className="img-fluid rounded-start" alt="Photo 2" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Mayo</h5>
                    <p className="card-text">Tus mejores momentos vividos durante Mayo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub14} className="img-fluid rounded-start" alt="Photo 3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Junio</h5>
                    <p className="card-text">Tus mejores momentos durante Junio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub14} className="img-fluid rounded-start" alt="Photo 3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Julio</h5>
                    <p className="card-text">Tus mejores momentos durante Julio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub14} className="img-fluid rounded-start" alt="Photo 3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Agosto</h5>
                    <p className="card-text">Tus mejores momentos durante Agosto</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub14} className="img-fluid rounded-start" alt="Photo 3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Septiembre</h5>
                    <p className="card-text">Tus mejores momentos durante Septiembre</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-left2 mb-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={pub14} className="img-fluid rounded-start" alt="Photo 3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Octubre</h5>
                    <p className="card-text">Tus mejores momentos durante Octubre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-12 col-lg-6">
          <div className="middle-column">
            {/* Post Creation Card */}
            <div className="card post-creation-card shadow-sm mb-4">
              <div className="card-body">
                <div className="input-group mb-3">
                  <textarea
                    className="form-control post-textarea"
                    placeholder="En que estas pensando?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                  />
                </div>

                {image && (
                  <div className="preview-image-container mb-3">
                    <img
                      src={image}
                      alt="Preview"
                      className="img-fluid rounded preview-image"
                    />
                    <button
                      className="btn btn-sm btn-outline-danger remove-image-btn"
                      onClick={() => setImage(null)}
                    >
                      ✕
                    </button>
                  </div>
                )}

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      className="d-none"
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="imageInput"
                      className="btn btn-outline-secondary me-2"
                    >
                      <i className="fas fa-image me-1"></i>
                      Cargar Imagen
                    </label>
                  </div>
                  <button
                    className="btn btn-primary post-button"
                    onClick={handlePost}
                    disabled={!message && !image}
                  >
                    Publicar
                  </button>
                </div>
              </div>
            </div>

            {/* Posts Section */}
            <div className="posts-section">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="card post-card mb-3 animate__animated animate__fadeIn"
                >
                  <div className="card-header d-flex align-items-center">
                    <img
                      src={post.profileImage}
                      alt="Profile"
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <h6 className="mb-0">{post.username}</h6>
                      <small className="text-muted">Just now</small>
                    </div>
                  </div>

                  <div className="card-body">
                    {post.message && <p>{post.message}</p>}
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="img-fluid rounded post-image"
                      />
                    )}
                  </div>

                  <div className="card-footer">
                    <div className="d-flex flex-column">
                      <div className="reaction-buttons mb-2">
                        <button
                          className="btn btn-outline-primary me-2 reaction-btn like-btn"
                          onClick={() => handleReaction(post, 'likes')}
                        >
                          <i className="fas fa-thumbs-up me-1"></i>
                          Like ({post.likes || 0})
                        </button>
                        <button
                          className="btn btn-outline-danger reaction-btn love-btn"
                          onClick={() => handleReaction(post, 'loves')}
                        >
                          <i className="fas fa-heart me-1"></i>
                          Love ({post.loves || 0})
                        </button>
                      </div>
                      <button
                        className="btn btn-outline-secondary comment-btn align-self-start"
                        onClick={() => handleCommentClick(post)}
                      >
                        <i className="fas fa-comment me-1"></i>
                        Comments
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="col-12 col-lg-3">
          <div className="right-column">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h6 className="card-title">Apartado Publicitario</h6>
                <img src={spon} alt="card-img" className="card-img mb-3" />
                <p className="card-text text-justify">
                  {' '}
                  <span className="h6">Aprovecha Black Friday en HBO MAX</span>{' '}
                  HBO MAX por 5 meses por 6.90 soles, precio antes 23.90 soles.No te pierdas esta promoción y aprovechala, ¡Ya!
                </p>
                <a href="#" className="btn btn-outline-info card-link btn-sm">
                  Obtener Descuento
                </a>
              </div>
            </div>
            <div class="likes-container">
              <div class="likes-header">
                <h3>Cuentas Recomendadas</h3>
                <a href="#" class="view-all">Ver todo</a>
              </div>
              <div class="likes-content">
                <div class="like-item">
                  <div class="profile-image">
                    <img src={usu4} alt="Jacob Thornton"/>
                  </div>
                  <div class="profile-info">
                    <h4>Jhordy Ruiz Yañez</h4>
                    <span>@fat</span>
                  </div>
                  <button class="follow-btn">
                    <i class="fas fa-user-plus"></i>
                    Seguir
                  </button>
                </div>
                <div class="like-item">
                  <div class="profile-image">
                    <img src={usu2} alt="Mark Otto"/>
                  </div>
                  <div class="profile-info">
                    <h4>Anthony Cotrina</h4>
                    <span>@mdo</span>
                  </div>
                  <button class="follow-btn">
                    <i class="fas fa-user-plus"></i>
                    Seguir
                  </button>
                </div>
              </div>
              <div class="likes-footer">
                <p>Por tu seguridad no sigas a cuentas que no conozcas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {commentModalVisible && (
        <div className="modal fade show comments-modal" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Comments</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setCommentModalVisible(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="comments-list">
                  {selectedPost?.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="d-flex align-items-center mb-3 comment-item"
                    >
                      <img
                        src={logo1}
                        alt="Profile"
                        className="rounded-circle me-3"
                        style={{ width: '40px', height: '40px' }}
                      />
                      <div>
                        <h6 className="mb-1">{comment.author}</h6>
                        <p className="mb-0">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="comment-input mt-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={handleCommentSubmit}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;