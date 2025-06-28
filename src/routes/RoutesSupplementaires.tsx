
import { Route } from "react-router-dom";
import PageGenerator500 from "@/pages/PageGenerator500";
import { 
  Brain, Code, Database, Zap, Users, Target, Shield, 
  TrendingUp, BarChart, Settings, Lightbulb, Monitor,
  Globe, Smartphone, Cloud, Lock, Heart, Briefcase,
  Camera, Mic, FileText, Search, Mail, Phone,
  Calculator, Ruler, Compass, Timer, Bell,
  Star, Flag, Trophy, Medal, Award,
  Gift, Diamond, Crown, Gem, Key,
  CheckCircle, AlertTriangle, Archive,
  Cpu, HardDrive, Wifi, Bluetooth, Radio,
  Tv, Headphones, Microchip, Battery,
  Sun, Moon, CloudRain, Snowflake, Wind,
  Thermometer, Droplets, Flame, Mountain,
  Flower, Leaf, Fish, Bird, Rabbit,
  Cat, Dog, Apple, Cherry, Grape,
  Coffee, Wine, Beer, Cake, Pizza,
  Truck, Bus, Car, Rocket, Satellite,
  MapPin, Navigation, Clock, Watch,
  Hourglass, Book, Newspaper, Pen,
  Pencil, Eraser, Paintbrush, Gamepad,
  Shirt, Glasses, Laptop, Tablet,
  Printer, MessageSquare, Link, Layers,
  Network, ArrowRight, ScatterChart
} from "lucide-react";

// Configuration pour compléter les 500 pages - 100 pages supplémentaires
const routesSupplementaires = [
  // Certifications spécialisées (20 pages)
  { path: "/certification-aws-machine-learning", title: "Certification AWS Machine Learning", description: "Certification AWS ML spécialisée", icon: Cloud, color: "orange", category: "Certification" },
  { path: "/certification-azure-data-scientist", title: "Certification Azure Data Scientist", description: "Certification Microsoft Azure Data Science", icon: Database, color: "blue", category: "Certification" },
  { path: "/certification-google-cloud-ml", title: "Certification Google Cloud ML", description: "Certification Google Cloud Machine Learning", icon: Cloud, color: "green", category: "Certification" },
  { path: "/certification-databricks", title: "Certification Databricks", description: "Certification Databricks Analytics", icon: BarChart, color: "red", category: "Certification" },
  { path: "/certification-snowflake", title: "Certification Snowflake", description: "Certification Snowflake Data Cloud", icon: Snowflake, color: "cyan", category: "Certification" },
  { path: "/certification-tableau", title: "Certification Tableau", description: "Certification Tableau Desktop", icon: BarChart, color: "blue", category: "Certification" },
  { path: "/certification-power-bi", title: "Certification Power BI", description: "Certification Microsoft Power BI", icon: TrendingUp, color: "yellow", category: "Certification" },
  { path: "/certification-sas", title: "Certification SAS", description: "Certification SAS Analytics", icon: Calculator, color: "purple", category: "Certification" },
  { path: "/certification-r-programming", title: "Certification R Programming", description: "Certification R pour Data Science", icon: Code, color: "indigo", category: "Certification" },
  { path: "/certification-julia", title: "Certification Julia", description: "Certification Julia Computing", icon: Zap, color: "pink", category: "Certification" },
  { path: "/certification-scala", title: "Certification Scala", description: "Certification Scala pour Big Data", icon: Code, color: "red", category: "Certification" },
  { path: "/certification-mongodb", title: "Certification MongoDB", description: "Certification MongoDB Developer", icon: Database, color: "green", category: "Certification" },
  { path: "/certification-elasticsearch", title: "Certification Elasticsearch", description: "Certification Elastic Stack", icon: Search, color: "yellow", category: "Certification" },
  { path: "/certification-redis", title: "Certification Redis", description: "Certification Redis Database", icon: Database, color: "red", category: "Certification" },
  { path: "/certification-neo4j", title: "Certification Neo4j", description: "Certification Neo4j Graph Database", icon: Network, color: "blue", category: "Certification" },
  { path: "/certification-cassandra", title: "Certification Cassandra", description: "Certification Apache Cassandra", icon: Database, color: "teal", category: "Certification" },
  { path: "/certification-kafka", title: "Certification Kafka", description: "Certification Apache Kafka", icon: MessageSquare, color: "orange", category: "Certification" },
  { path: "/certification-airflow", title: "Certification Airflow", description: "Certification Apache Airflow", icon: Wind, color: "cyan", category: "Certification" },
  { path: "/certification-spark", title: "Certification Spark", description: "Certification Apache Spark", icon: Zap, color: "amber", category: "Certification" },
  { path: "/certification-hadoop", title: "Certification Hadoop", description: "Certification Apache Hadoop", icon: Database, color: "yellow", category: "Certification" },

  // Nouveaux outils spécialisés (30 pages)
  { path: "/outil-streamlit", title: "Streamlit", description: "Applications web pour Data Science", icon: Monitor, color: "red", category: "Outil" },
  { path: "/outil-gradio", title: "Gradio", description: "Interfaces ML interactives", icon: Smartphone, color: "orange", category: "Outil" },
  { path: "/outil-plotly", title: "Plotly", description: "Visualisation interactive", icon: BarChart, color: "blue", category: "Outil" },
  { path: "/outil-altair", title: "Altair", description: "Visualisation statistique", icon: TrendingUp, color: "purple", category: "Outil" },
  { path: "/outil-seaborn", title: "Seaborn", description: "Visualisation statistique Python", icon: BarChart, color: "teal", category: "Outil" },
  { path: "/outil-bokeh", title: "Bokeh", description: "Visualisation interactive Python", icon: Target, color: "green", category: "Outil" },
  { path: "/outil-dash", title: "Dash", description: "Applications web analytiques", icon: Monitor, color: "indigo", category: "Outil" },
  { path: "/outil-voila", title: "Voilà", description: "Notebooks comme applications web", icon: Globe, color: "pink", category: "Outil" },
  { path: "/outil-panel", title: "Panel", description: "Tableaux de bord Python", icon: Monitor, color: "cyan", category: "Outil" },
  { path: "/outil-holoviz", title: "HoloViz", description: "Écosystème visualisation Python", icon: Monitor, color: "emerald", category: "Outil" },
  { path: "/outil-fastapi", title: "FastAPI", description: "API rapides pour ML", icon: Zap, color: "teal", category: "Outil" },
  { path: "/outil-flask", title: "Flask", description: "Micro-framework web Python", icon: Code, color: "blue", category: "Outil" },
  { path: "/outil-django", title: "Django", description: "Framework web complet", icon: Shield, color: "green", category: "Outil" },
  { path: "/outil-celery", title: "Celery", description: "Tâches asynchrones Python", icon: Timer, color: "orange", category: "Outil" },
  { path: "/outil-pydantic", title: "Pydantic", description: "Validation de données Python", icon: CheckCircle, color: "purple", category: "Outil" },
  { path: "/outil-sqlalchemy", title: "SQLAlchemy", description: "ORM Python avancé", icon: Database, color: "red", category: "Outil" },
  { path: "/outil-alembic", title: "Alembic", description: "Migrations base de données", icon: ArrowRight, color: "yellow", category: "Outil" },
  { path: "/outil-pytest", title: "Pytest", description: "Framework de tests Python", icon: CheckCircle, color: "green", category: "Outil" },
  { path: "/outil-mypy", title: "MyPy", description: "Vérification de types Python", icon: Shield, color: "blue", category: "Outil" },
  { path: "/outil-black", title: "Black", description: "Formatage de code Python", icon: Paintbrush, color: "gray", category: "Outil" },
  { path: "/outil-flake8", title: "Flake8", description: "Linting Python", icon: Search, color: "teal", category: "Outil" },
  { path: "/outil-isort", title: "isort", description: "Organisation imports Python", icon: Layers, color: "indigo", category: "Outil" },
  { path: "/outil-pre-commit", title: "Pre-commit", description: "Hooks Git automatisés", icon: CheckCircle, color: "emerald", category: "Outil" },
  { path: "/outil-poetry", title: "Poetry", description: "Gestion dépendances Python", icon: Book, color: "purple", category: "Outil" },
  { path: "/outil-pipenv", title: "Pipenv", description: "Environnements virtuels Python", icon: Shield, color: "cyan", category: "Outil" },
  { path: "/outil-conda", title: "Conda", description: "Gestionnaire de paquets", icon: Archive, color: "green", category: "Outil" },
  { path: "/outil-mamba", title: "Mamba", description: "Conda rapide", icon: Zap, color: "orange", category: "Outil" },
  { path: "/outil-pip-tools", title: "Pip-tools", description: "Gestion dépendances pip", icon: Settings, color: "blue", category: "Outil" },
  { path: "/outil-tox", title: "Tox", description: "Tests multi-environnements", icon: Target, color: "red", category: "Outil" },
  { path: "/outil-nox", title: "Nox", description: "Automatisation tests Python", icon: Settings, color: "amber", category: "Outil" },

  // Nouvelles applications sectorielles (25 pages)
  { path: "/application-ia-banque-retail", title: "IA Banque Retail", description: "Applications IA banque de détail", icon: TrendingUp, color: "green", category: "Application" },
  { path: "/application-ia-banque-investissement", title: "IA Banque Investissement", description: "IA pour banque d'investissement", icon: BarChart, color: "blue", category: "Application" },
  { path: "/application-ia-assurance-auto", title: "IA Assurance Auto", description: "IA pour assurance automobile", icon: Car, color: "red", category: "Application" },
  { path: "/application-ia-assurance-habitation", title: "IA Assurance Habitation", description: "IA pour assurance habitation", icon: Heart, color: "teal", category: "Application" },
  { path: "/application-ia-assurance-sante", title: "IA Assurance Santé", description: "IA pour assurance santé", icon: Heart, color: "pink", category: "Application" },
  { path: "/application-ia-retail-fashion", title: "IA Retail Fashion", description: "IA pour mode et textile", icon: Shirt, color: "purple", category: "Application" },
  { path: "/application-ia-retail-alimentaire", title: "IA Retail Alimentaire", description: "IA pour commerce alimentaire", icon: Apple, color: "green", category: "Application" },
  { path: "/application-ia-retail-electronique", title: "IA Retail Électronique", description: "IA pour électronique grand public", icon: Smartphone, color: "blue", category: "Application" },
  { path: "/application-ia-sante-cardiologie", title: "IA Santé Cardiologie", description: "IA pour cardiologie", icon: Heart, color: "red", category: "Application" },
  { path: "/application-ia-sante-radiologie", title: "IA Santé Radiologie", description: "IA pour radiologie", icon: Camera, color: "teal", category: "Application" },
  { path: "/application-ia-sante-pathologie", title: "IA Santé Pathologie", description: "IA pour pathologie", icon: Search, color: "indigo", category: "Application" },
  { path: "/application-ia-sante-pharmacie", title: "IA Santé Pharmacie", description: "IA pour pharmacie", icon: Heart, color: "green", category: "Application" },
  { path: "/application-ia-education-primaire", title: "IA Éducation Primaire", description: "IA pour enseignement primaire", icon: Book, color: "yellow", category: "Application" },
  { path: "/application-ia-education-secondaire", title: "IA Éducation Secondaire", description: "IA pour enseignement secondaire", icon: Brain, color: "blue", category: "Application" },
  { path: "/application-ia-education-superieur", title: "IA Éducation Supérieur", description: "IA pour enseignement supérieur", icon: Brain, color: "purple", category: "Application" },
  { path: "/application-ia-transport-routier", title: "IA Transport Routier", description: "IA pour transport routier", icon: Truck, color: "orange", category: "Application" },
  { path: "/application-ia-transport-aerien", title: "IA Transport Aérien", description: "IA pour transport aérien", icon: Brain, color: "cyan", category: "Application" },
  { path: "/application-ia-transport-ferroviaire", title: "IA Transport Ferroviaire", description: "IA pour transport ferroviaire", icon: Brain, color: "green", category: "Application" },
  { path: "/application-ia-transport-maritime", title: "IA Transport Maritime", description: "IA pour transport maritime", icon: Brain, color: "blue", category: "Application" },
  { path: "/application-ia-energie-solaire", title: "IA Énergie Solaire", description: "IA pour énergie solaire", icon: Sun, color: "yellow", category: "Application" },
  { path: "/application-ia-energie-eolienne", title: "IA Énergie Éolienne", description: "IA pour énergie éolienne", icon: Wind, color: "teal", category: "Application" },
  { path: "/application-ia-energie-hydraulique", title: "IA Énergie Hydraulique", description: "IA pour énergie hydraulique", icon: Droplets, color: "blue", category: "Application" },
  { path: "/application-ia-energie-nucleaire", title: "IA Énergie Nucléaire", description: "IA pour énergie nucléaire", icon: Brain, color: "green", category: "Application" },
  { path: "/application-ia-agriculture-cereales", title: "IA Agriculture Céréales", description: "IA pour culture céréalière", icon: Heart, color: "amber", category: "Application" },
  { path: "/application-ia-agriculture-viticulture", title: "IA Agriculture Viticulture", description: "IA pour viticulture", icon: Grape, color: "purple", category: "Application" },

  // Guides pratiques avancés (25 pages)
  { path: "/guide-pratique-mlops", title: "Guide Pratique MLOps", description: "MLOps de A à Z", icon: Settings, color: "blue", category: "Guide" },
  { path: "/guide-pratique-dataops", title: "Guide Pratique DataOps", description: "DataOps en pratique", icon: Database, color: "green", category: "Guide" },
  { path: "/guide-pratique-devops-ia", title: "Guide Pratique DevOps IA", description: "DevOps pour projets IA", icon: Code, color: "orange", category: "Guide" },
  { path: "/guide-pratique-kubernetes-ml", title: "Guide Pratique Kubernetes ML", description: "Kubernetes pour Machine Learning", icon: Cloud, color: "blue", category: "Guide" },
  { path: "/guide-pratique-docker-ml", title: "Guide Pratique Docker ML", description: "Docker pour Machine Learning", icon: Archive, color: "teal", category: "Guide" },
  { path: "/guide-pratique-terraform-ml", title: "Guide Pratique Terraform ML", description: "Infrastructure as Code pour ML", icon: Settings, color: "purple", category: "Guide" },
  { path: "/guide-pratique-ansible-ml", title: "Guide Pratique Ansible ML", description: "Automatisation avec Ansible", icon: Settings, color: "red", category: "Guide" },
  { path: "/guide-pratique-jenkins-ml", title: "Guide Pratique Jenkins ML", description: "CI/CD avec Jenkins", icon: Settings, color: "blue", category: "Guide" },
  { path: "/guide-pratique-github-actions-ml", title: "Guide GitHub Actions ML", description: "CI/CD avec GitHub Actions", icon: Code, color: "gray", category: "Guide" },
  { path: "/guide-pratique-gitlab-ci-ml", title: "Guide GitLab CI ML", description: "CI/CD avec GitLab", icon: Code, color: "orange", category: "Guide" },
  { path: "/guide-pratique-monitoring-ml", title: "Guide Monitoring ML", description: "Surveillance de modèles ML", icon: Monitor, color: "green", category: "Guide" },
  { path: "/guide-pratique-logging-ml", title: "Guide Logging ML", description: "Logging pour applications ML", icon: FileText, color: "yellow", category: "Guide" },
  { path: "/guide-pratique-testing-ml", title: "Guide Testing ML", description: "Tests pour modèles ML", icon: CheckCircle, color: "emerald", category: "Guide" },
  { path: "/guide-pratique-debugging-ml", title: "Guide Debugging ML", description: "Debugging de modèles ML", icon: Search, color: "red", category: "Guide" },
  { path: "/guide-pratique-profiling-ml", title: "Guide Profiling ML", description: "Profiling de performances ML", icon: BarChart, color: "indigo", category: "Guide" },
  { path: "/guide-pratique-optimization-ml", title: "Guide Optimization ML", description: "Optimisation de modèles ML", icon: Zap, color: "yellow", category: "Guide" },
  { path: "/guide-pratique-scaling-ml", title: "Guide Scaling ML", description: "Mise à l'échelle de modèles ML", icon: TrendingUp, color: "blue", category: "Guide" },
  { path: "/guide-pratique-security-ml", title: "Guide Security ML", description: "Sécurité des modèles ML", icon: Shield, color: "red", category: "Guide" },
  { path: "/guide-pratique-privacy-ml", title: "Guide Privacy ML", description: "Confidentialité des données ML", icon: Lock, color: "purple", category: "Guide" },
  { path: "/guide-pratique-ethics-ml", title: "Guide Ethics ML", description: "Éthique en Machine Learning", icon: Heart, color: "pink", category: "Guide" },
  { path: "/guide-pratique-explainability-ml", title: "Guide Explainability ML", description: "Explicabilité des modèles ML", icon: Lightbulb, color: "amber", category: "Guide" },
  { path: "/guide-pratique-fairness-ml", title: "Guide Fairness ML", description: "Équité des modèles ML", icon: Heart, color: "teal", category: "Guide" },
  { path: "/guide-pratique-bias-ml", title: "Guide Bias ML", description: "Gestion des biais en ML", icon: AlertTriangle, color: "orange", category: "Guide" },
  { path: "/guide-pratique-drift-ml", title: "Guide Drift ML", description: "Détection de dérive de modèles", icon: TrendingUp, color: "cyan", category: "Guide" },
  { path: "/guide-pratique-retraining-ml", title: "Guide Retraining ML", description: "Réentraînement de modèles ML", icon: Brain, color: "green", category: "Guide" }
];

const RoutesSupplementaires = () => {
  return (
    <>
      {routesSupplementaires.map((config, index) => (
        <Route
          key={`route-supplementaire-${index}`}
          path={config.path}
          element={
            <PageGenerator500
              title={config.title}
              description={config.description}
              icon={config.icon}
              color={config.color}
              category={config.category}
            />
          }
        />
      ))}
    </>
  );
};

export default RoutesSupplementaires;
