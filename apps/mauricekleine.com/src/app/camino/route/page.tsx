import { Box, Container } from "~/ui/layout";
import { Header, Link, Text } from "~/ui/typography";

// eslint-disable-next-line no-restricted-imports
import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.camino}>
      <div className={styles["camino-container"]}>
        <Container gap={8} width="sm">
          <Box gap={4}>
            <Box
              alignItems="center"
              direction="horizontal"
              justifyContent="between"
            >
              <Header as="h2">Route</Header>

              <Link href="/camino">Back</Link>
            </Box>

            <Text color="gray.300">
              My camino combines multiple, historically significant routes. I
              choose this combination because it travels through some of the
              most beautiful parts of France and Spain, while avoiding the peak
              season crowds of more popular routes like the Camino Francés. The
              total distance is approximately
              <Text as="span" weight="bold">
                {" "}
                2,450km
              </Text>
              .
            </Text>
          </Box>

          <Box gap={8}>
            <Box gap={2}>
              <Header as="h3">Via Campaniensis</Header>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=860&end=862&B1=Startendpoint">
                Namur to Reims (235km)
              </Link>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=862&end=1128&B1=Startendpoint">
                Reims to Vézelay (406km)
              </Link>
            </Box>

            <Box gap={2}>
              <Header as="h3">Via Lemovicensis</Header>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=1128&end=880&B1=Startendpoint">
                Vézelay to Nevers (103km)
              </Link>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=880&end=882&B1=Startendpoint">
                Nevers to Saint-Amand-Montrond (97km)
              </Link>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=882&end=861&B1=Startendpoint">
                Saint-Amand-Montrond to Limoges (239km)
              </Link>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=861&end=869&B1=Startendpoint">
                Limoges to Périgueux (118km)
              </Link>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=869&end=881&B1=Startendpoint">
                Périgueux to Mont-de-Marsan (249km)
              </Link>

              <Text>Mont-de-Marsan to Irun (140km, custom route / no map)</Text>
            </Box>

            <Box gap={2}>
              <Header as="h3">Camino del Norte</Header>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=1441&end=1419&routenr=3&B1=Startendpoint">
                Irun to Donostia / San Sebastián (25km)
              </Link>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=1419&end=1417&routenr=3&B1=Startendpoint">
                Donostia / San Sebastián to Bilbao (126km)
              </Link>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=1417&end=1710&routenr=3&B1=Startendpoint">
                Bilbao to Santander (141km)
              </Link>

              <Link href="https://www.longdistancepaths.eu/camino/en/index.php?start=1710&end=1709&routenr=3&B1=Startendpoint">
                Santander to Gijón (205km)
              </Link>

              <Text>Gijón to Oviedo (28km, custom route / no map)</Text>
            </Box>

            <Box gap={2}>
              <Header as="h3">Camino Primitivo</Header>

              <Link href="https://stingynomads.com/camino-primitivo-stages/">
                Oviedo to Santiago de Compostela (321km)
              </Link>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
