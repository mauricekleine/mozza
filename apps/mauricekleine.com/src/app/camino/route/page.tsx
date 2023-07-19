import { ArrowUpRight } from "@mozza-icons/react";

import { Icon } from "~/ui/icon";
import { Box, Container } from "~/ui/layout";
import { Header, Link, Text } from "~/ui/typography";

import styles from "./page.module.css";

export default function Page() {
  return (
    <Container className={styles.container} gap={8} width="sm">
      <Box gap={4}>
        <Box
          alignItems="center"
          direction="horizontal"
          justifyContent="between"
        >
          <Header as="h2">Route</Header>

          <Link href="/camino">Back</Link>
        </Box>

        <Text color="gray.200">
          My camino combines multiple, historically significant routes. I choose
          this combination because it travels through some of the most beautiful
          parts of France and Spain, while avoiding the peak season crowds of
          more popular routes like the Camino Francés. The total distance is
          approximately
          <Text as="span" weight="bold">
            {" "}
            2,350km
          </Text>
          .
        </Text>
      </Box>

      <Box gap={8}>
        <Box gap={1}>
          <Text color="gray.400" size="sm">
            Early August
          </Text>

          <Box>
            <Link href="https://compostelagenootschap.be/op-weg/pelgrimswegen/stappen/vertrekken-belgie-luxemburg/via-monastica/">
              <Header as="h4">
                Via Monastica
                <Icon icon={ArrowUpRight} size="sm" />
              </Header>
            </Link>

            <Text color="gray.300">101km from Namur to Rocroi</Text>
          </Box>
        </Box>

        <Box gap={1}>
          <Text color="gray.400" size="sm">
            Early to mid-August
          </Text>

          <Box>
            <Link href="https://compostelagenootschap.be/op-weg/pelgrimswegen/stappen/vertrekken-vanuit-frankrijk/via-campaniensis/">
              <Header as="h4">
                Via Campaniensis
                <Icon icon={ArrowUpRight} size="sm" />
              </Header>
            </Link>

            <Text color="gray.300">387km from Rocroi to Vézelay</Text>
          </Box>
        </Box>

        <Box gap={1}>
          <Text color="gray.400" size="sm">
            Mid-August to late September
          </Text>

          <Box>
            <Link href="https://compostelagenootschap.be/op-weg/pelgrimswegen/stappen/vertrekken-vanuit-frankrijk/via-lemovicensis/">
              <Header as="h4">
                Via Lemovicensis
                <Icon icon={ArrowUpRight} size="sm" />
              </Header>
            </Link>

            <Text color="gray.300">
              944km from Vézelay via Nevers to Saint-Jean-Pied-de-Port
            </Text>
          </Box>
        </Box>

        <Box gap={1}>
          <Text color="gray.400" size="sm">
            Late September
          </Text>

          <Box>
            <Link href="https://compostelagenootschap.be/op-weg/pelgrimswegen/stappen/vertrekken-vanuit-frankrijk/saint-jean-pied-de-port-hendaye/">
              <Header as="h4">
                Voie Nive Bidassoa
                <Icon icon={ArrowUpRight} size="sm" />
              </Header>
            </Link>

            <Text color="gray.300">
              75km from Saint-Jean-Pied-de-Port to Irun
            </Text>
          </Box>
        </Box>

        <Box gap={1}>
          <Text color="gray.400" size="sm">
            Late September to mid-October
          </Text>

          <Box>
            <Link href="https://compostelagenootschap.be/op-weg/pelgrimswegen/stappen/vertrekken-in-spanje/camino-del-norte/">
              <Header as="h4">
                Camino del Norte
                <Icon icon={ArrowUpRight} size="sm" />
              </Header>
            </Link>

            <Text color="gray.300">471km from Irun to Villaviciosa</Text>
          </Box>
        </Box>

        <Box gap={1}>
          <Text color="gray.400" size="sm">
            Mid-October till Early November
          </Text>

          <Box>
            <Link href="https://compostelagenootschap.be/op-weg/pelgrimswegen/stappen/vertrekken-in-spanje/camino-primitivo/">
              <Header as="h4">
                Camino Primitivo
                <Icon icon={ArrowUpRight} size="sm" />
              </Header>
            </Link>

            <Text color="gray.300">
              355km from Villaviciosa to Santiago de Compostela
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
